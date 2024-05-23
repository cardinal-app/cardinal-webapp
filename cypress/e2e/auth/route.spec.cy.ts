import "cypress-localstorage-commands"
import unsigned from '../../fixtures/auth/token/unsigned-max-expiry.json'
import expired from '../../fixtures/auth/token/expired.json'

describe('Protected Routes', () => {
  const tokenUrl = 'http://localhost:8010/token/validate';
  const protect = '/fit-track';
  const redirect = '/auth/login';
  const unprotectedRoutes: string[] = [
    "/home",
    "/auth/login",
    "/auth/register",
  ];

  afterEach(() => {
    cy.clearLocalStorage();
    // Note :: local storage used over cookie storage for 'local' profile
  });

  describe('Require valid token to access protected routes', () => {
    beforeEach(() => {
      cy.intercept('GET', tokenUrl, { fixture: 'auth/invalid-token-response' });
    });

    it('should prevent access to protected routes when token has expired', () => {
      /** Given: token with 'valid' signature but has expired */
      cy.setLocalStorage("token", expired.token);

      /** When: */
      cy.visit(protect);

      /** Then: should be redirected to login page */
      cy.location('pathname').should('eq', redirect);
    })

    it('should prevent access to protected routes when token has invalid signature', () => {
      /** Given: token with valid expiry but invalid signature */
      cy.setLocalStorage("token", unsigned.token);

      /** When: */
      cy.visit(protect);

      /** Then: should be redirected to login page */
      cy.location('pathname').should('eq', redirect);
    })

    it('should prevent access to protected routes when token has invalid format', () => {
      /** Given: the token has an invalid format */
      cy.setLocalStorage("token", "token");

      /** When: */
      cy.visit(protect);

      /** Then: should be redirected to home page */
      cy.location('pathname').should('eq', redirect);
    })

    it('should prevent access to protected routes when missing token', () => {
      /** When: there is no token */
      cy.visit(protect);

      /** Then: should be redirected to login page */
      cy.location('pathname').should('eq', redirect);
    })

  });

  describe('Permit access to unprotected routes irrespective of token', () => {

    unprotectedRoutes.forEach((route) => {
      it(`should grant access to unprotected routes irrespective of token [${route}]`, () => {
        /** When: */
        cy.visit(route);

        /** Then: should be redirected to login page */
        cy.location('pathname').should('eq', route);
      })
    });

  });
})

import "cypress-localstorage-commands"
import unsigned from '../../fixtures/auth/unsigned-max-expiry.json'

describe('Protected Routes', () => {
  const tokenUrl = 'http://localhost:8010/token/validate';
  const protect = '/fit-track';
  const redirect = '/auth/login';
  const unprotectedRoutes: string[] = [
    "home",
    "auth/login",
    "auth/register"
  ];

  // Note :: local storage used over cookie storage for 'local' profile

  afterEach(() => {
    cy.clearLocalStorage();
  });

  describe('Require valid token to access protected routes', () => {
    beforeEach(() => {
      cy.intercept('GET', tokenUrl, { fixture: 'auth/invalid' });
    });

    it('should prevent access to protected routes when token has expired', () => {
      /** Given: */

      // TODO :: next...
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

  })

  it('should grant to access protected routes when token is valid', () => {

  })

  it('should grant access to unprotected routes irrespective of token', () => {

  })

})

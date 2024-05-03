import "cypress-localstorage-commands"

describe('Protected Routes', () => {
  const tokenUrl = 'http://localhost:8010/token';
  const protect = '/fit-track';
  const redirect = '/auth/login';
  const unprotectedRoutes: string[] = [
    "home",
    "auth/login",
    "auth/register"
  ];

  // Note :: end to end test: no setting storage directly, login if you have to...

  beforeEach(() => {
    cy.visit(redirect);
  });

  afterEach(() => {
    cy.clearLocalStorage();
  });

  // Question :: is it possible to get a list of test descriptions to document what this feature does?

  describe('Require valid token to access protected routes', () => {

    it('should prevent access to protected routes when token has expired', () => {
      /** Given: */
    })

    it('should prevent access to protected routes when token has invalid signature', () => {
      /** Given: token with valid expiry but invalid signature */
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTk5OX0.RAXPOm19cHn5mG7fSyo1K6wamKUX8XXzKsLKpz_Lb3I";
      cy.setLocalStorage("token", token);

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

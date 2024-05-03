
describe('Login', () => {
  const homePage = '/home';
  const loginPage = '/auth/login';
  const loginUrl = 'http://localhost:8010/auth/login';

  // Question :: is it possible to get a list of test descriptions to document what this feature does

  beforeEach(() => {
    cy.intercept('POST', loginUrl, { fixture: 'auth/unsigned-token-with-max-expiry' });

    cy.visit(loginPage);
  });

  it('should sign user in when valid credentials are used', () => {
    /** When: */
    cy.get('#username').type('ema.il@address.com');
    cy.get('#password').type('password');
    cy.get('#login-btn').click();

    /** Then: user is routed to home page */
    cy.location('pathname').should('eq', homePage);

  });

  it('should reject login when invalid credentials are used', () => {
    // TODO

    /** Then: user is presented with failure reason and given another change to login */
  });

});

import 'cypress-localstorage-commands'
import response from '../../fixtures/auth/unsigned-max-expiry.json'

describe('Login', () => {
  const homePage = '/home';
  const loginPage = '/auth/login';
  const loginUrl = 'http://localhost:8010/auth/login';

  describe('Valid', () => {
    beforeEach(() => {
      cy.visit(loginPage);
      cy.intercept('POST', loginUrl, { fixture: 'auth/unsigned-max-expiry' });
    });

    it('should sign user in when valid credentials are used', () => {
      /** When: */
      cy.get('#username').type('ema.il@address.com');
      cy.get('#password').type('password');
      cy.get('#login-btn').click();

      /** Then: user is routed to home page and token is set in storage */
      cy.location('pathname').should('eq', homePage);

      cy.getLocalStorage("token").should('eq', response.token);
      // Note :: local storage used over cookie storage for 'local' profile
    });
  })

  describe('Invalid', () => {
    beforeEach(() => {
      cy.visit(loginPage);
      cy.intercept('POST', loginUrl, {});
    });

    it('should reject login when invalid credentials are used', () => {
      // TODO

      /** Then: user is presented with failure reason and given another change to login */
    });
  })

});

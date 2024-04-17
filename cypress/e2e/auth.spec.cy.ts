
describe('Authentication', () => {
  const urlRegistration = 'http://localhost:8010/auth/register';
  const urlLogin = 'http://localhost:8010/auth/login';

  beforeEach(() => {

  });

  describe('Protected Routes', () => {

    it('should grant access to protected routes when attempt made with a valid token', () => {
      /** Given */

      /** When */

      /** Then */

    })

    it('should redirect user to /home when attempt made to access protected routes without valid token', () => {
      /** Given */

      /** When */

      /** Then */

    })

    it('should allow access to unprotected routes without valid token', () => {
      /** Given */

      /** When */

      /** Then */

    })
  })

  describe('Registration', () => {

  })

  describe('Login', () => {

  })

  describe('Logout', () => {

  })

})

/** What authentication rules should the webapp have? */
/**
 * Protected routes
 *    All routes (except /home ; /login ; /registration), should require a valid JWT to have access
 *      If no JWT, should be routed to /home
 * Login
 *    Should sign user in, then route to /home
 *    Failed login should present the reason and give user another chance (unlimited)
 * Registration
 *    Should create new account, then login
 *    Failed registration should present the reason and give user another chance (unlimited)
 * Logout
 *    Should clear JWT and route back to /home
 *
 * Note :: reset password not to be considered as part of 0.2.x Authentication
 */

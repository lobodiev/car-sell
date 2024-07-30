/**
 * Defines the routes for the application.
 *
 * @type {Object}
 * @property {string} HOME - The route for the home page.
 * @property {Object} AUTH - The routes related to authentication.
 * @property {string} AUTH.LOGIN - The route for the login page.
 * @property {string} AUTH.SIGNUP - The route for the signup page.
 * @property {string} AUTH.NEW_PASSWORD - The route for the new password page.
 * @property {string} AUTH.RESET_PASSWORD - The route for the reset password page.
 * @property {string} AUTH.OTP_CODE - The route for the otp code page.
 */
export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    RESET_PASSWORD: '/auth/reset-password',
    NEW_PASSWORD: '/auth/new-password',
    OTP_CODE: '/auth/otp-code',
  },
};

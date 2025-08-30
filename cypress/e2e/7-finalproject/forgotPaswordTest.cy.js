import ForgotPasswordPage from 'c:/Users/hafiz/sanbercypress/cypress/page/forgotPasswordPage';

describe('OrangeHRM - Forgot Password', () => {
  it('Request reset password', () => {
    ForgotPasswordPage.visit();
    ForgotPasswordPage.fillUsername('Admin');
    ForgotPasswordPage.clickReset();

    // cek pesan sukses muncul
    ForgotPasswordPage.getMessage().should('contain', 'Reset Password link sent successfully');
  });
});
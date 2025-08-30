import LoginPage from 'c:/Users/hafiz/sanbercypress/cypress/page/loginpage';



describe('OrangeHRM - Login Feature', () => {

  it('Valid login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('Admin');
    LoginPage.fillPassword('admin123');
    LoginPage.clickLogin();

    cy.url().should('include', '/dashboard');
  });

  it('Invalid login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('Admin');
    LoginPage.fillPassword('12345678');
    LoginPage.clickLogin();

    LoginPage.getErrorMessage().should('contain', 'Invalid credentials');
  });

});
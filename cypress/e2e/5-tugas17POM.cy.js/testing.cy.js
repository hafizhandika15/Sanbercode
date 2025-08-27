import LoginPage from 'c:/Users/hafiz/sanbercypress/cypress/page/loginpage';
const loginPage = new LoginPage();


describe('OrangeHRM - Login Feature', () => {
  
  it('TC001 - Valid login', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLogin();

    cy.url().should('include', '/dashboard');
  });

  it('TC002 - Salah Password', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('Admin123');
    loginPage.clickLogin();

    loginPage.getAlertMessage().should('contain', 'Invalid credentials');
  });

  it('TC003 - Salah Username', () => {
    loginPage.visit();
    loginPage.fillUsername('admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLogin();

    
  });

  it('TC004 - Forgot Password', () => {
    loginPage.visit();
    loginPage.clickForgotPassword();
    loginPage.submitForgotPassword('Admin');
  });

  it('TC005 - Kosong username & password', () => {
    loginPage.visit();
    loginPage.clickLogin();
    loginPage.getRequiredMessage().should('contain', 'Required');
  });

  it('TC006 - Hanya isi username', () => {
    loginPage.visit();
    loginPage.fillUsername('Admin');
    loginPage.clickLogin();
    loginPage.getRequiredMessage().should('contain', 'Required');
  });

});
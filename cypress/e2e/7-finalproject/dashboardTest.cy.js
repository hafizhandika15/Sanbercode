import LoginPage from 'c:/Users/hafiz/sanbercypress/cypress/page/loginpage';
import DashboardPage from 'c:/Users/hafiz/sanbercypress/cypress/page/dashboardPage';

describe('OrangeHRM - Dashboard Directory', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.fillUsername('Admin');
    LoginPage.fillPassword('admin123');
    LoginPage.clickLogin();
  });

  it('Navigate to Directory menu', () => {
    DashboardPage.clickMenu('Directory');
    DashboardPage.waitForDirectory();

    DashboardPage.getDirectoryTitle().should('contain', 'Directory');
  });
});

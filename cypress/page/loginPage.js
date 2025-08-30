class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.intercept('POST', '**/auth/validate').as('loginRequest');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest');
  }

  getErrorMessage() {
    return cy.get('.oxd-alert-content');
  }
}

export default new LoginPage();

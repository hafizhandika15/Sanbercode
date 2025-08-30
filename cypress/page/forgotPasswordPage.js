class ForgotPasswordPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  clickReset() {
  cy.get('button[type="submit"]').click();
  }

  getMessage() {
    return cy.get('.oxd-text--h6');
  }
}

export default new ForgotPasswordPage();

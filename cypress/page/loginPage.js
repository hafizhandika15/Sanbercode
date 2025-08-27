class LoginPage {
  visit() {
    cy.visit('/auth/login');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  clickForgotPassword() {
    cy.contains('Forgot your password?').click();
  }

  submitForgotPassword(username) {
    cy.get('input[name="username"]').type(username);
    cy.get('button[type="submit"]').click();
  }

  getAlertMessage() {
    return cy.get('.oxd-alert-content');
  }
  
  getRequiredMessage() {
  return cy.get('.oxd-input-field-error-message');
}
}

export default LoginPage;
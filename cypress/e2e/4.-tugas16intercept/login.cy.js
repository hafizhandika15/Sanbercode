describe('OrangeHRM - Login Feature', () => {
  
it('TC001 - Valid login', () => {
  cy.intercept('POST', '**/web/index.php/auth/validate').as('loginRequest');

  cy.visit('/auth/login');
  cy.get('input[name="username"]').type('Admin');    
  cy.get('input[name="password"]').type('admin123'); 
  cy.get('button[type="submit"]').click();

  cy.wait('@loginRequest').its('response.statusCode').should('be.oneOf', [200, 302]);
  cy.url().should('include', '/dashboard');
});

  it('TC002 - Salah Password', () => {
    cy.intercept('POST', '**/auth/login').as('loginRequest');

    cy.visit('/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('Admin123');
    cy.get('button[type="submit"]').click();
    // invalid

    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
  });

  it('TC003 - Salah Username', () => {
    cy.intercept('POST', '**/auth/login').as('loginRequest');

        it('TC003 - Salah username', () => {
    cy.visit('/auth/login');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    
  });;
  });

  it('TC004 - Forgot Password', () => {
    cy.intercept('POST', '**/auth/forgotPassword').as('forgotPasswordRequest');

    cy.visit('/auth/login');
    cy.contains('Forgot your password?').click();
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

 });

  it('TC005 - Login tapi belum isi username dan password', () => {
    cy.intercept('POST', '**/auth/login').as('loginRequest');

    cy.visit('/auth/login');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-group .oxd-text').should('contain', 'Required');
  });

  it('TC006 - Login hanya mengisi username', () => {
    cy.intercept('POST', '**/auth/login').as('loginRequest');

    cy.visit('/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-input-group .oxd-text').should('contain', 'Required');
  });

});

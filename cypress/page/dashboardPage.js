class DashboardPage {
  clickMenu(menuName) {
    cy.intercept('GET', '**/directory/**').as('directoryRequest');
    cy.contains('a.oxd-main-menu-item', menuName).click();
  }

  waitForDirectory() {
    cy.wait('@directoryRequest');
  }

  getDirectoryTitle() {
    return cy.get('.oxd-topbar-header-breadcrumb > h6');
  }
}

export default new DashboardPage();

describe('Routing', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });
  it('should open home page when user clicks on home icon', () => {
    const home = cy.get('[data-testid="home-icon"]');
    home.click();
    cy.get('[data-testid="home-page-container"]').should('be.visible', true);
  });

  it('should open home page when user clicks on brand icon', () => {
    const home = cy.get('[data-testid="brand-icon"]');
    home.click();
    cy.get('[data-testid="home-page-container"]').should('be.visible', true);
  });

  it('should open friends page when user clicks on friends icon', () => {
    const friends = cy.get('[data-testid="friends-icon"]');
    friends.click();
    cy.get('[data-testid="friends-page-container"]').should('be.visible', true);
  });

  it('should open watch page when user clicks on watch icon', () => {
    const watch = cy.get('[data-testid="watch-icon"]');
    watch.click();
    cy.get('[data-testid="watch-page-container"]').should('be.visible', true);
  });

  it('should open market page when user clicks on marketplace icon', () => {
    const market = cy.get('[data-testid="market-icon"]');
    market.click();
    cy.get('[data-testid="market-page-container"]').should('be.visible', true);
  });

  it('should open gaming page when user clicks on gaming icon', () => {
    const market = cy.get('[data-testid="gaming-icon"]');
    market.click();
    cy.get('[data-testid="gaming-page-container"]').should('be.visible', true);
  });

  it('should open profile page when user clicks on profile button', () => {
    const market = cy.get('[data-testid="profile-btn"]');
    market.click();
    cy.get('[data-testid="profile-page-container"]').should('be.visible', true);
  });
});

/// <reference types='cypress' />;

describe('App', () => {
  // instead of render we use cy.visit() localhost
  before(() => {
    cy.visit('http://localhost:3000');
  });

  context('Navbar:', () => {
    //in jest we use test('name',()=>{})
    it('should have a facebook icon', () => {
      // in jest it is screen.getBy or screen.queryBy or screen.findBy etc.
      cy.get('[data-testid="brand"]').should('be.visible', true);
      // assert in jest using expect().toBe()
      // ***you can also use expect in cypress***
    });

    it('should have a search bar', () => {
      // in jest it is screen.getBy or screen.queryBy or screen.findBy etc.
      cy.get('[data-testid="search"]').should('be.visible', true);
    });

    it('should have home icon', () => {
      cy.get('[data-testid="home-icon"]').should('be.visible', true);
    });

    it('should have friends icon', () => {
      cy.get('[data-testid="friends-icon"]').should('be.visible', true);
    });

    it('should have watch icon', () => {
      cy.get('[data-testid="watch-icon"]').should('be.visible', true);
    });

    it('should have marketplace icon', () => {
      cy.get('[data-testid="market-icon"]').should('be.visible', true);
    });

    it('should have gaming icon', () => {
      cy.get('[data-testid="gaming-icon"]').should('be.visible', true);
    });

    it('should have profile button', () => {
      cy.get('[data-testid="profile-btn"]').should('be.visible', true);
    });

    it('should have menu button', () => {
      cy.get('[data-testid="menu-btn"]').should('be.visible', true);
    });

    it('should have messenger button', () => {
      cy.get('[data-testid="messenger-btn"]').should('be.visible', true);
    });

    it('should have notification button', () => {
      cy.get('[data-testid="notification-btn"]').should('be.visible', true);
    });

    it('should have dropdown btn', () => {
      cy.get('[data-testid="dropdown-btn"]').should('be.visible', true);
    });
  });
});

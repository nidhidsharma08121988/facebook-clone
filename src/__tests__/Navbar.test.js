import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/layout/Navbar';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  // in cypress we use cy.visit() localhost
  beforeEach(() => {
    render(<Navbar />);
  });

  it('should have a facebook icon', () => {
    expect(screen.getByTestId('brand')).toBeVisible();
  });

  it('should have a search bar', () => {
    expect(screen.getByTestId('search')).toBeVisible();
  });

  it('should have home icon', () => {
    expect(screen.getByTestId('home-icon')).toBeVisible();
    //   cy.get('[data-testid="home-icon"]').should('be.visible', true);
  });

  it('should have friends icon', () => {
    expect(screen.getByTestId('friends-icon')).toBeVisible();
  });

  it('should have watch icon', () => {
    expect(screen.getByTestId('watch-icon')).toBeVisible();
  });

  it('should have marketplace icon', () => {
    expect(screen.getByTestId('market-icon')).toBeVisible();
    // in cypress: cy.get('[data-testid="market-icon"]').should('be.visible', true);
  });

  it('should have gaming icon', () => {
    expect(screen.getByTestId('gaming-icon')).toBeVisible();
  });

  it('should have profile button', () => {
    expect(screen.getByTestId('profile-btn')).toBeVisible();
  });

  it('should have menu button', () => {
    expect(screen.getByTestId('menu-btn')).toBeVisible();
  });

  it('should have messenger button', () => {
    expect(screen.getByTestId('messenger-btn')).toBeVisible();
  });

  test('should have notification button', () => {
    expect(screen.getByTestId('notification-btn')).toBeVisible();
  });

  it('should have dropdown btn', () => {
    expect(screen.getByTestId('dropdown-btn')).toBeVisible();
  });

  it('should display the drop down when menu button is clicked', () => {
    const menu = screen.getByTestId('menu-btn');

    fireEvent.click(menu);

    expect(screen.getByText(/Create/gi)).toBeVisible();
    expect(screen.getByText(/Social/gi)).toBeVisible();
    expect(screen.getByText(/Post/gi)).toBeVisible();
    expect(screen.getByText(/Story/gi)).toBeVisible();
    expect(screen.getByText(/Life Event/gi)).toBeVisible();
    expect(screen.getByText(/Page/gi)).toBeVisible();
  });

  it('should display messenger when the messenger button is clicked', () => {
    const messenger = screen.getByTestId('messenger-btn');

    fireEvent.click(messenger);

    expect(screen.getByText(/messenger/gi)).toBeVisible();
    expect(screen.getByTestId('search-messenger')).toBeVisible();
    expect(screen.getByText(/see all in messenger/gi)).toBeVisible();
  });
});

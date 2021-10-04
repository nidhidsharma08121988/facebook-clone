import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../layout/Navbar.module.css';
import { pageTypes } from '../../redux-store/actions/types';

export const CenterNavbar = props => {
  const { currentPage } = props;

  const renderHomeIcon = () => (
    <li
      className={`${classes.homeInmenu} ${
        currentPage === pageTypes.HOME && classes.listBlue
      }`}
    >
      <Link to='/' className={classes.navbarLink}>
        <i
          className={`fa fa-home ${
            currentPage === pageTypes.HOME && classes.iconBlue
          }`}
          data-testid='home-icon'
        />
      </Link>
    </li>
  );

  const renderFriendsIcon = () => (
    <li
      className={`${classes.friendsInmenu} ${
        currentPage === pageTypes.FRIENDS && classes.listBlue
      }`}
    >
      <Link to='/friends' className={classes.navbarLink}>
        <i
          className={`fas fa-user-friends  ${
            currentPage === pageTypes.FRIENDS && classes.iconBlue
          }`}
          data-testid='friends-icon'
        />
      </Link>
    </li>
  );

  const renderWatchIcon = () => (
    <li
      className={`${classes.watchInmenu} ${
        currentPage === pageTypes.WATCH && classes.listBlue
      }`}
    >
      <Link to='/watch' className={classes.navbarLink}>
        <i
          className={`fas fa-video ${
            currentPage === pageTypes.WATCH && classes.iconBlue
          }`}
          data-testid='watch-icon'
        />
      </Link>
    </li>
  );

  const renderMarketIcon = () => (
    <li
      className={`${classes.marketInmenu} ${
        currentPage === pageTypes.MARKET && classes.listBlue
      }`}
    >
      <Link to='/market-place' className={classes.navbarLink}>
        <i
          className={`fas fa-store ${
            currentPage === pageTypes.MARKET && classes.iconBlue
          }`}
          data-testid='market-icon'
        />
      </Link>
    </li>
  );

  const renderGamingIcon = () => (
    <li
      className={`${classes.gamingInmenu}  ${
        currentPage === pageTypes.GAMING && classes.listBlue
      }`}
    >
      <Link to='/gaming' className={classes.navbarLink}>
        <i
          className={`fas fa-dice-four  ${
            currentPage === pageTypes.GAMING && classes.iconBlue
          }`}
          data-testid='gaming-icon'
        />
      </Link>
    </li>
  );

  return (
    <ul className={classes.center}>
      {renderHomeIcon()}
      {renderFriendsIcon()}
      {renderWatchIcon()}
      {renderMarketIcon()}
      {renderGamingIcon()}
    </ul>
  );
};

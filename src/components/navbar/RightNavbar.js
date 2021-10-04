import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../layout/Navbar.module.css';

export const RightNavbar = props => {
  const { user } = props;
  const names = user.userName ? user.userName.split(' ') : '';
  const first = names !== [] ? names[0] : '';

  const renderProfileButton = () => (
    <li>
      <Link to='profile' style={{ textDecoration: 'none' }}>
        <button
          name='profile'
          data-testid='profile-btn'
          className={`${classes.profileBtn} btn`}
        >
          <img
            src={user.userImg}
            alt='user'
            className={classes.profileBtnImg}
          />
          <span className={classes.profileName}>{first}</span>
        </button>
      </Link>
    </li>
  );

  const renderMessengerIcon = () => (
    <li
      name='messenger'
      data-testid='messenger-btn'
      className={`${classes.btn}`}
    >
      <i className='fab fa-facebook-messenger'></i>
    </li>
  );

  const renderNotificationIcon = () => (
    <li
      name='notification'
      data-testid='notification-btn'
      className={`${classes.btn}`}
    >
      <i className='fas fa-bell' />
    </li>
  );

  const renderDwnArrow = () => (
    <li name='more' data-testid='dropdown-btn' className={`${classes.btn}`}>
      <i className='fas fa-caret-down'></i>
    </li>
  );

  const renderMoreIcon = () => (
    <li className={`${classes.restInmenu}`}>
      <i className='fas fa-bars' data-testid='rest-icon'></i>
    </li>
  );

  return (
    user && (
      <ul className={classes.right}>
        {renderProfileButton()}
        {renderMessengerIcon()}
        {renderNotificationIcon()}
        {renderDwnArrow()}
        {renderMoreIcon()}
      </ul>
    )
  );
};

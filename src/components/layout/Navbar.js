import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

const Left = props => {
  const { search, set } = props;
  return (
    <ul className={classes.left}>
      <li className={classes.brandStyle} data-testid='brand-icon'>
        <Link to='/'>
          <i className={`fab fa-facebook ${classes.brandIconStyle}`}></i>
        </Link>
      </li>
      <li className={classes.searchContainerInmenu}>
        <div className={classes.searchIconContainer}>
          <i
            className={`fa fa-search ${classes.searchIcon}`}
            style={{ zIndex: 1 }}
          />
          <input
            onChange={e => set(e.target.value)}
            type='text'
            value={search}
            placeholder='Search Facebook'
            data-testid='search'
            className={classes.search}
          />
        </div>
      </li>
    </ul>
  );
};

const Center = () => {
  return (
    <ul className={classes.center}>
      <li className={classes.homeInmenu}>
        <Link to='/' className={classes.navbarLink}>
          <i className='fa fa-home' data-testid='home-icon' />
        </Link>
      </li>
      <li className={classes.friendsInmenu}>
        <Link to='/friends' className={classes.navbarLink}>
          <i className='fas fa-user-friends' data-testid='friends-icon' />
        </Link>
      </li>
      <li className={classes.watchInmenu}>
        <Link to='/watch' className={classes.navbarLink}>
          <i className='fas fa-video' data-testid='watch-icon' />
        </Link>
      </li>
      <li className={classes.marketInmenu}>
        <Link to='/market-place' className={classes.navbarLink}>
          <i className='fas fa-store' data-testid='market-icon' />
        </Link>
      </li>
      <li className={classes.gamingInmenu}>
        <Link to='/gaming' className={classes.navbarLink}>
          <i className='fas fa-dice-four' data-testid='gaming-icon'></i>
        </Link>
      </li>
    </ul>
  );
};

const Right = () => {
  return (
    <ul className={classes.right}>
      <li>
        <Link to='profile' style={{ textDecoration: 'none' }}>
          <button
            name='profile'
            data-testid='profile-btn'
            className={`${classes.profileBtn} btn`}
          >
            <img src='' alt='pic' className={classes.profileBtnImg} />
            <span className={classes.profileName}>Name</span>
          </button>
        </Link>
      </li>
      <li>
        <button
          name='messenger'
          data-testid='messenger-btn'
          className={`${classes.messengerBtn} btn`}
        >
          <i className='fab fa-facebook-messenger'></i>
        </button>
      </li>
      <li>
        <button
          name='notification'
          data-testid='notification-btn'
          className={`${classes.notificationBtn} btn`}
        >
          <i className='fas fa-bell' />
        </button>
      </li>
      <li>
        <button
          name='more'
          data-testid='dropdown-btn'
          className={`${classes.dropdownBtn} btn`}
        >
          <i className='fas fa-caret-down'></i>
        </button>
      </li>
      <li className={classes.restInmenu}>
        <i className='fas fa-bars' data-testid='rest-icon'></i>
      </li>
    </ul>
  );
};
const Navbar = props => {
  const [search, setSearch] = useState('');
  return (
    <div className={classes.navbar}>
      <>
        <Left search={search} set={setSearch} />
      </>
      <>
        <Center />
      </>
      <>
        <Right />
      </>
    </div>
  );
};

export default Navbar;

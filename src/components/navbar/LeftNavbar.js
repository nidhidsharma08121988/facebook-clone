import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../layout/Navbar.module.css';

export const LeftNavbar = props => {
  const { search, setSearch } = props;

  const renderBrandIcon = () => (
    <li className={classes.brandStyle} data-testid='brand-icon'>
      <Link to='/'>
        <i className={`fab fa-facebook ${classes.brandIconStyle}`}></i>
      </Link>
    </li>
  );

  const renderSearch = () => (
    <li className={classes.searchContainerInmenu}>
      <div className={classes.searchIconContainer}>
        <i
          className={`fa fa-search ${classes.searchIcon}`}
          style={{ zIndex: 1 }}
        />
        <input
          onChange={e => setSearch(e.target.value)}
          type='text'
          value={search}
          placeholder='Search Facebook'
          data-testid='search'
          className={classes.search}
        />
      </div>
    </li>
  );

  return (
    <ul className={classes.left}>
      {renderBrandIcon()}
      {renderSearch()}
    </ul>
  );
};

export default LeftNavbar;

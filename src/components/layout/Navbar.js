import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Navbar.module.css';
import { pageTypes } from '../../redux-store/actions/types';

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

const Center = props => {
  const { currentPage } = props;
  return (
    <ul className={classes.center}>
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
    </ul>
  );
};

const Right = props => {
  const { user } = props;
  const names = user.userName ? user.userName.split(' ') : '';
  const first = names !== [] ? names[0] : '';
  return (
    user && (
      <ul className={classes.right}>
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
        <li
          name='messenger'
          data-testid='messenger-btn'
          className={`${classes.btn}`}
        >
          <i className='fab fa-facebook-messenger'></i>
        </li>
        <li
          name='notification'
          data-testid='notification-btn'
          className={`${classes.btn}`}
        >
          <i className='fas fa-bell' />
        </li>
        <li name='more' data-testid='dropdown-btn' className={`${classes.btn}`}>
          <i className='fas fa-caret-down'></i>
        </li>
        <li className={`${classes.restInmenu}`}>
          <i className='fas fa-bars' data-testid='rest-icon'></i>
        </li>
      </ul>
    )
  );
};

const Navbar = props => {
  const [user, setUser] = useState(props.currentUser);
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (user !== props.currentUser) {
      setUser(props.currentUser);
    }

    if (currentPage !== props.currentPage) {
      setCurrentPage(props.currentPage);
    }
    //eslint-disable-next-line
  }, [props.currentUser, props.currentPage]);

  return (
    <div className={classes.navbar}>
      <>
        <Left search={search} set={setSearch} />
      </>
      <>
        <Center currentPage={currentPage} />
      </>
      <>
        <Right user={user} />
      </>
    </div>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired,
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.post_reducer.currentUser,
  currentPage: state.post_reducer.currentPage,
});
export default connect(mapStateToProps, {})(Navbar);

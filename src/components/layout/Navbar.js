import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
          <i className='fas fa-dice-four' data-testid='gaming-icon' />
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
  const [search, setSearch] = useState('');
  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  return (
    <div className={classes.navbar}>
      <>
        <Left search={search} set={setSearch} />
      </>
      <>
        <Center />
      </>
      <>
        <Right user={user} />
      </>
    </div>
  );
};

Navbar.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  currentUser: state.post_reducer.currentUser,
});
export default connect(mapStateToProps, {})(Navbar);

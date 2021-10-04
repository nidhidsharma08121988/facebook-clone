import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from './Navbar.module.css';
import { LeftNavbar } from '../navbar/LeftNavbar';
import { CenterNavbar } from '../navbar/CenterNavbar';
import { RightNavbar } from '../navbar/RightNavbar';

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
        <LeftNavbar search={search} setSearch={setSearch} />
      </>
      <>
        <CenterNavbar currentPage={currentPage} />
      </>
      <>
        <RightNavbar user={user} />
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

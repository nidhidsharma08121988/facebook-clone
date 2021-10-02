import React from 'react';
import { connect } from 'react-redux';
import classes from './UserNamePicture.module.css';

const UserNamePicture = props => {
  const { user } = props;
  return (
    <>
      <div>
        <img
          data-testid='post-user-image'
          src={user.userImg}
          alt='author'
          className={classes.image}
        />
      </div>
      <div data-testid='username'>{user.userName && user.userName}</div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.post_reducer.currentUser,
});

export default connect(mapStateToProps, {})(UserNamePicture);

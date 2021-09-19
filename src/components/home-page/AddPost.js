import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classes from './AddPost.module.css';
import Visibility from './Visibility';

const AddPost = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);
  return (
    <div className={classes.addPostContainer}>
      <div data-test='user-visibility' className={classes.userVisibilityImage}>
        <img src={user.userImg} alt='user' className={classes.userImage} />
        <div className={classes.userVisibility}>
          <div>{user.userName}</div>
          <Visibility />
        </div>
      </div>
      <div className={classes.postTextContainer}>
        <textarea
          placeholder={`What's on your mind, ${
            user.userName && user.userName
          }?`}
        />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  currentUser: state.post_reducer.currentUser,
});
export default connect(mapStateToProps, {})(AddPost);

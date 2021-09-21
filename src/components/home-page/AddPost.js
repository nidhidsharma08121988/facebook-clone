import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddMoreToPost from './AddMoreToPost';
import classes from './AddPost.module.css';
import Visibility from './Visibility';
import { addPostAction } from '../../redux-store/actions/postActions';
import PropTypes from 'prop-types';

const AddPost = props => {
  const [user, setUser] = useState(props.currentUser);
  const [myPost, setMyPost] = useState({
    user: '',
    postId: '',
    text: '',
    imageSrc: [],
    videoSrc: [],
    comments: [],
    likes: [],
  });
  const { addPostAction } = props;

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const callAddPost = async () => {
    const newPost = {
      ...myPost,
      user: '1',
      postId: Math.floor(Math.random() * 1000),
    };
    try {
      addPostAction(newPost);
    } catch (error) {
      alert('Something went wrong');
    }
    setMyPost({
      user: '',
      postId: '',
      text: '',
      imageSrc: [],
      videoSrc: [],
      comments: [],
      likes: [],
    });
  };

  const cancelPost = () => {
    setMyPost({
      user: '',
      postId: '',
      text: '',
      imageSrc: [],
      videoSrc: [],
      comments: [],
      likes: [],
    });
  };

  return (
    <div className={classes.addPostContainer}>
      <div className={classes.topMenu}>
        <div
          data-test='user-visibility'
          className={classes.userVisibilityImage}
        >
          <img src={user.userImg} alt='user' className={classes.userImage} />
          <div className={classes.userVisibility}>
            <div>{user.userName}</div>
            <Visibility />
          </div>
        </div>
        <div className={classes.rightPostMenu}>
          <i
            className={`fas fa-times ${classes.cancelPost}`}
            onClick={cancelPost}
            data-testid='cancel-post'
          >
            {' '}
          </i>
        </div>
      </div>
      <div className={classes.postTextContainer}>
        <div className={classes.textAreaContainer}>
          <textarea
            data-testid='input-post'
            placeholder={`What's on your mind, ${
              user.userName && user.userName
            }?`}
            value={myPost.text}
            onChange={e => setMyPost({ ...myPost, text: e.target.value })}
          />
        </div>
        <div className={classes.postIcon} data-testid='submit-post'>
          {myPost.text ? (
            <i
              className={`fas fa-location-arrow`}
              onClick={callAddPost}
              data-testid='add-post-btn'
            ></i>
          ) : (
            <i
              className={`fas fa-location-arrow`}
              style={{ color: 'grey' }}
              data-testid='add-post-btn'
            ></i>
          )}
        </div>
      </div>
      <div className={classes.addMoreToPostContainer}>
        <AddMoreToPost />
      </div>
    </div>
  );
};

AddPost.propTypes = {
  addPostAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.post_reducer.currentUser,
});

export default connect(mapStateToProps, { addPostAction })(AddPost);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddMoreToPost from './AddMoreToPost';
import classes from './AddPost.module.css';
import PostTextContainer from './PostTextContainer';
import { addPostAction } from '../../redux-store/actions/postActions';
import PropTypes from 'prop-types';
import NewPostMenu from './NewPostMenu';

const AddPost = props => {
  const { addPostAction } = props;
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

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);

  const clearMyPost = () => {
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

  const newPostHasContent = newPost => newPost.text !== '' && newPost.text;

  const publishPost = () => {
    try {
      const newPost = {
        ...myPost,
        user: '1',
        postId: Math.floor(Math.random() * 1000),
      };

      if (newPostHasContent(newPost)) {
        addPostAction(newPost);
        clearMyPost();
      }
    } catch (error) {
      console.log(error);
      clearMyPost();
    }
  };

  const cancelPost = () => {
    clearMyPost();
  };

  const setPostText = postText => {
    setMyPost({ ...myPost, text: postText });
  };

  return (
    <div className={classes.addPostContainer}>
      <TopMenu user={user} cancelPost={cancelPost} />
      <PostTextContainer
        user={user}
        setPostText={setPostText}
        addPost={publishPost}
      />
      <div className={classes.addMoreToPostContainer}>
        <AddMoreToPost />
      </div>
    </div>
  );
};

const TopMenu = props => {
  const { user, cancelPost } = props;
  return (
    user && (
      <div className={classes.topMenu}>
        <NewPostMenu user={user} />
        <div className={classes.rightPostMenu}>
          <i
            className={`fas fa-times ${classes.cancelPost}`}
            onClick={cancelPost}
            data-testid='cancel-post'
          ></i>
        </div>
      </div>
    )
  );
};

AddPost.propTypes = {
  addPostAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.post_reducer.currentUser,
});

export default connect(mapStateToProps, { addPostAction })(AddPost);

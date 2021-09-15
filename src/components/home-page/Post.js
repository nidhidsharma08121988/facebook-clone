import React, { useState } from 'react';
import classes from './Post.module.css';
import PropTypes from 'prop-types';
import { getUser } from '../../network/api_calls';
import { useEffect } from 'react';

const DisplayPost = props => {
  const { user, post } = props;
  return user && post ? (
    <div className={classes.displayPost}>
      <Top user={user} />
      <ThePost post={post} />
      <DisplayCommentLikes post={post} />
    </div>
  ) : (
    'Nothing to display'
  );
};
const Top = props => {
  const { user } = props;

  return user !== {} && user !== undefined ? (
    <div className={classes.top}>
      <div className={classes.nameSection}>
        <img
          data-testid='post-user-image'
          src={user.userImg}
          alt='author'
          className={classes.image}
        />
        <div data-testid='username'>{user.userName && user.userName}</div>
      </div>
      <div className={classes.right}>
        <i className={`fas fa-ellipsis-h ${classes.more}`}></i>
      </div>
    </div>
  ) : (
    'Nothing to show'
  );
};
const ThePost = props => {
  const { post } = props;
  return (
    post && (
      <div className={classes.content} data-testid='post-content'>
        {post.text}
      </div>
    )
  );
};

const DisplayCommentLikes = props => {
  const { post } = props;
  return (
    post && (
      <div data-testid='likes-comment'>
        <div data-testid='likes-number'>{post.likes && post.likes.length}</div>
      </div>
    )
  );
};
export const Post = props => {
  useEffect(() => {
    try {
      setPost(props.post);
      getUser(props.post.user).then(res => setUser(res));
    } catch (error) {
      console.log(error);
    }
    //eslint-disable-next-line
  }, [props.post]);

  const [user, setUser] = useState({});
  const [post, setPost] = useState({});

  return user === {} ||
    post === {} ||
    post === undefined ||
    user === undefined ? (
    'No Post'
  ) : (
    <DisplayPost user={user} post={post} />
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;

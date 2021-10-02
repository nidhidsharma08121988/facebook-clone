import React, { useState } from 'react';
import classes from './Post.module.css';
import PropTypes from 'prop-types';
import { getUser } from '../../network/api_calls';
import { useEffect } from 'react';
import DisplayPostMenu from './DisplayPostMenu';

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

const DisplayPost = props => {
  const { user, post } = props;
  return user && post ? (
    <div className={classes.displayPost}>
      <DisplayPostMenu user={user} />
      <ThePost post={post} />
      <DisplayCommentLikes post={post} />
    </div>
  ) : (
    'Nothing to display'
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
      <div
        data-testid='like-comment-share-bar'
        className={classes.likeCommentShare}
      >
        <div data-testid='likes-number'>
          <i className={`far fa-thumbs-up ${classes.icon}`} />
          <span>
            {post.likes && post.likes.length > 0 && post.likes.length}
          </span>
        </div>
        <div data-testid='comments-number'>
          <i className={`far fa-comment-alt ${classes.icon}`} />
          <span>
            {post.comments && post.comments.length > 0 && post.comments.length}
          </span>
        </div>
        <div data-testid='share'>
          <i className={`fa fa-share ${classes.icon}`} />
        </div>
      </div>
    )
  );
};

export default Post;
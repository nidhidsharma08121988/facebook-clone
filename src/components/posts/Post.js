import React, { useState } from 'react';
import classes from './Post.module.css';
import PropTypes from 'prop-types';
import { getUser } from '../../network/api_calls';
import { useEffect } from 'react';
import PostMenu from './PostMenu';

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

  const hasPostAndUser = () => {
    return (
      user !== {} && post !== {} && post !== undefined && user !== undefined
    );
  };

  return hasPostAndUser() ? <DisplayPost user={user} post={post} /> : 'No Post';
};

const DisplayPost = props => {
  const { user, post } = props;
  return user && post ? (
    <div className={classes.displayPost}>
      <PostMenu user={user} />
      <PostContent post={post} />
      <CommentLikes post={post} />
    </div>
  ) : (
    'Nothing to display'
  );
};

const PostContent = props => {
  const { post } = props;
  return (
    post && (
      <div className={classes.content} data-testid='post-content'>
        {post.text}
      </div>
    )
  );
};

const CommentLikes = props => {
  const { post } = props;
  return (
    post && (
      <div
        data-testid='like-comment-share-bar'
        className={classes.likeCommentShare}
      >
        <Likes post={post} />
        <Comments post={post} />
        <Share />
      </div>
    )
  );
};

const Likes = props => {
  const { post } = props;
  const hasLikes = () => {
    return post.likes && post.likes.length > 0;
  };
  const numberOfLikes = () => post.likes.length;
  return (
    post && (
      <div data-testid='likes-number'>
        <i className={`far fa-thumbs-up ${classes.icon}`} />
        <span>{hasLikes() && numberOfLikes()}</span>
      </div>
    )
  );
};

const Comments = props => {
  const { post } = props;

  const hasComments = () => {
    return post.comments && post.comments.length > 0;
  };

  const numberOfComments = () => post.comments.length;

  return (
    post && (
      <div data-testid='comments-number'>
        <i className={`far fa-comment-alt ${classes.icon}`} />
        <span>{hasComments() && numberOfComments()}</span>
      </div>
    )
  );
};

const Share = props => {
  return (
    <div data-testid='share'>
      <i className={`fa fa-share ${classes.icon}`} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;

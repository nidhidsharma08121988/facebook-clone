import React, { useState } from 'react';
import classes from './Post.module.css';
import PropTypes from 'prop-types';
import { getUser } from '../../network/api_calls';
import { useEffect } from 'react';

const DisplayPost = props => {
  const { user, post } = props;
  return (
    user &&
    post && (
      <div className={classes.displayPost}>
        <Top user={user} />
        <ThePost post={post} />
      </div>
    )
  );
};
const Top = props => {
  const { user } = props;

  return user !== {} && user !== undefined ? (
    <div className={classes.top}>
      <div>
        <img
          src='https://via.placeholder.com/300'
          alt='author'
          className={classes.image}
        />
        <span>{user.userName}</span>
      </div>
    </div>
  ) : (
    'Nothing to show'
  );
};
const ThePost = props => {
  const { post } = props;
  return <div>{post.text}</div>;
};

export const Post = props => {
  useEffect(() => {
    setPost(props.post);
    getUser(props.post.user).then(res => setUser(res));
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

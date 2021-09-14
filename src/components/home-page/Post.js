import React, { useState } from 'react';
import classes from './Post.module.css';
import PropTypes from 'prop-types';

import { getUserAction } from '../../redux-store/actions/userActions';
import { useEffect } from 'react';

const Post = props => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = getUserAction(props.post.user);
    setUser(user);
    console.log(user);
  }, [props.post.user]);

  return (
    <div className={classes.card} data-testid='post-container'>
      {user && 'Got name'}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;

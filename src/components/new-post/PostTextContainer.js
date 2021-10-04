import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './PostTextContainer.module.css';

const PostTextContainer = props => {
  const { user, setPostText, addPost } = props;
  const [text, setText] = useState('');
  const addThePost = () => {
    addPost();
    setText('');
  };

  useEffect(() => {
    setPostText(text);
    //eslint-disable-next-line
  }, [text]);

  const activeIcon = (
    <i
      className={`fas fa-location-arrow`}
      onClick={addThePost}
      data-testid='add-post-btn'
    ></i>
  );

  const disabledIcon = (
    <i
      className={`fas fa-location-arrow`}
      style={{ color: 'grey', disabled: 'true', cursor: 'default' }}
      data-testid='add-post-btn'
    ></i>
  );

  const renderTextArea = () => (
    <div className={classes.textAreaContainer}>
      <textarea
        data-testid='input-post'
        placeholder={`What's on your mind, ${user.userName && user.userName}?`}
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );

  const renderPostIcon = () => (
    <div className={classes.postIcon} data-testid='submit-post'>
      {text ? activeIcon : disabledIcon}
    </div>
  );

  const renderAddPost = () => (
    <div className={classes.postTextContainer}>
      {renderTextArea()}
      {renderPostIcon()}
    </div>
  );

  return user ? (
    renderAddPost()
  ) : (
    <div className={classes.postTextContainer}>Something went wrong</div>
  );
};

PostTextContainer.propTypes = {
  user: PropTypes.object.isRequired,
  setPostText: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default PostTextContainer;

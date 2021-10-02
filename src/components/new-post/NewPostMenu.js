import React from 'react';
import UserNamePicture from '../home-page/UserNamePicture';
import Visibility from './Visibility';
import classes from './NewPostMenu.module.css';

const NewPostMenu = props => {
  const { user } = props;
  return (
    <div data-testid='user-visibility' className={classes.userVisibilityImage}>
      <div className={classes.usernamePicture}>
        <UserNamePicture user={user} />
      </div>
      <div className={classes.userVisibility}>
        <Visibility />
      </div>
    </div>
  );
};

export default NewPostMenu;

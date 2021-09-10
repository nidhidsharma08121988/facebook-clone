import React from 'react';
import commonClass from './Common.module.css';
const ProfilePage = () => {
  return (
    <div
      className={commonClass.wholeContainer}
      data-testid='profile-page-container'
    >
      Profile
    </div>
  );
};

export default ProfilePage;

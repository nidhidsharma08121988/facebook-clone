import React from 'react';
import commonClass from './Common.module.css';
const FriendsPage = () => {
  return (
    <div
      className={commonClass.wholeContainer}
      data-testid='friends-page-container'
    >
      Friends
    </div>
  );
};

export default FriendsPage;

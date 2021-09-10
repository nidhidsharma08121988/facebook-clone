import React from 'react';
import commonClass from './Common.module.css';
const GamingPage = () => {
  return (
    <div
      className={commonClass.wholeContainer}
      data-testid='gaming-page-container'
    >
      Gaming
    </div>
  );
};

export default GamingPage;

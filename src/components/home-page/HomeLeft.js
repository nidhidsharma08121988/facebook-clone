import React from 'react';
import classes from './HomeLeft.module.css';

const HomeLeft = () => {
  const leftList = [''];
  return (
    <div className={classes.homeLeftContainer}>
      {leftList.map(item => item)}
    </div>
  );
};

export default HomeLeft;

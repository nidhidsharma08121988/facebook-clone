import React, { useState } from 'react';
import classes from './Visibility.module.css';
const Visibility = () => {
  const visibilityType = {
    public: 'Public',
    friends: 'Friends',
    except: 'Friends except',
    none: 'Only Me',
    custom: 'Custom',
  };
  const visibilityList = [
    {
      id: 'friends',
      icon: 'fas fa-user-friends',
    },
    {
      id: 'public',
      icon: 'fas fa-globe',
    },
    {
      id: 'except',
      icon: 'fas fa-users-slash',
    },
    {
      id: 'none',
      icon: 'fas fa-lock',
    },
    {
      id: 'custom',
      icon: 'fas fa-cog',
    },
  ];
  const [visibility, setVisibility] = useState(visibilityList[0]);

  return (
    <div className={classes.visibilityContainer}>
      <div className={classes.selectedOption}>
        <i className={visibility.icon} />
        <span>{visibilityType[visibility.id]}</span>
        <i class='fa fa-angle-down'></i>
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Visibility;

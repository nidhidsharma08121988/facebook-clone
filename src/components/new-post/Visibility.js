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
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDiv = () => setShowDropDown(!showDropDown);
  const itemClick = item => {
    setVisibility(item);
    setShowDropDown(false);
  };

  const renderSelectedOption = () => (
    <div className={classes.selectedOption} onClick={toggleDiv}>
      <i className={visibility.icon} />
      <span>
        <strong>{visibilityType[visibility.id]}</strong>
      </span>
      <i className={showDropDown ? `fas fa-angle-up` : `fas fa-angle-down`}></i>
    </div>
  );

  const renderVisibilityList = visibilityList.map((item, index) => (
    <li
      key={index}
      className={classes.listItem}
      onClick={() => itemClick(item)}
    >
      <i className={item.icon} />
      <span>{visibilityType[item.id]}</span>
    </li>
  ));

  const renderDropDown = () => (
    <div className={`${showDropDown ? classes.show : classes.hide}`}>
      <p>
        <strong>Who can see your post?</strong>
      </p>
      <ul>{renderVisibilityList}</ul>
    </div>
  );

  return (
    <div
      className={classes.visibilityContainer}
      onMouseLeave={() => setShowDropDown(false)}
    >
      {renderSelectedOption()}
      {renderDropDown()}
    </div>
  );
};

export default Visibility;

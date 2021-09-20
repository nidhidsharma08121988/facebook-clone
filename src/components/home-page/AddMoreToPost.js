import React from 'react';
import classes from './AddMoreToPost.module.css';

const AddMoreToPost = () => {
  const addMoreItemsList = [
    {
      id: 'photo',
      icon: 'fas fa-image',
    },
    {
      id: 'tag',
      icon: 'fas fa-user-tag',
    },
    {
      name: 'feeling',
      icon: 'fas fa-grin',
    },
    {
      name: 'location',
      icon: 'fas fa-map-marker-alt',
    },
    {
      name: 'host',
      icon: 'fas fa-microphone',
    },
    {
      name: 'live',
      icon: 'fas fa-video',
    },
  ];
  return (
    <>
      <ul className={classes.addMoreToPost}>
        {addMoreItemsList.map((item, index) => (
          <li key={index} className={classes.moreIconItem}>
            <i className={item.icon}></i>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddMoreToPost;

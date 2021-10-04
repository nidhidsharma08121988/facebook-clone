import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from './Post';
import classes from './Posts.module.css';

const Posts = props => {
  const hasPostsToDisplay = () => props.posts.length > 0;
  const mapPostsAndDisplayPostComponent = () => {
    return props.posts.map((post, index) => {
      return (
        <div
          key={index}
          className={classes.postContainer}
          data-testid='post-container'
        >
          <Post post={post} />
        </div>
      );
    });
  };
  return (
    <div className={classes.allPosts} data-testid='posts-container'>
      {hasPostsToDisplay()
        ? mapPostsAndDisplayPostComponent()
        : 'No Posts to diplay'}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({
  posts: state.post_reducer.posts,
});

export default connect(mapStateToProps, {})(Posts);

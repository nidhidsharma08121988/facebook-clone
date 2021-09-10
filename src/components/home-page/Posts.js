import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import classes from './Posts.module.css';

const Posts = props => {
  return (
    <div className={classes.allPosts}>
      {props.posts.length > 0
        ? props.posts.map((post, index) => {
            return (
              <div key={index} className={classes.postContainer}>
                <Post text={post.text} />
              </div>
            );
          })
        : 'No Posts'}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.post_reducer.posts,
});

export default connect(mapStateToProps, {})(Posts);

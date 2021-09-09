import React from 'react';
import { connect } from 'react-redux';

const Posts = props => {
  return (
    <div>
      <div className='all-posts'>
        {props.posts.length > 0
          ? props.posts.map((post, index) => {
              return <li key={index}>{post.text}</li>;
            })
          : 'No Posts'}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.post_reducer.posts,
});

export default connect(mapStateToProps, {})(Posts);

import { connect } from 'react-redux';

const HomeCenter = props => {
  return (
    <div>
      {props.posts.length > 0
        ? props.posts.map(([post, index]) => {
            return <li key={index}>{post.text}</li>;
          })
        : 'No Posts'}
    </div>
  );
};
const mapStateToProps = state => ({
  posts: state.post_reducer.posts,
});
export default connect(mapStateToProps, {})(HomeCenter);

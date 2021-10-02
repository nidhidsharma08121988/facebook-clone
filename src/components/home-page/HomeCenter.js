import Posts from '../posts/Posts';
import classes from './HomeCenter.module.css';
import AddPost from '../new-post/AddPost';

const HomeCenter = props => {
  return (
    <div className={classes.homeCenter}>
      <AddPost />
      <Posts />
    </div>
  );
};

export default HomeCenter;

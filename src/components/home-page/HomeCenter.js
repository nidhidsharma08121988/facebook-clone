import Posts from './Posts';
import classes from './HomeCenter.module.css';
import AddPost from './AddPost';

const HomeCenter = props => {
  return (
    <div className={classes.homeCenter}>
      <AddPost />
      <Posts />
    </div>
  );
};

export default HomeCenter;

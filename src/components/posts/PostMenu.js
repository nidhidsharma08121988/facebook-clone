import UserNamePicture from '../home-page/UserNamePicture';
import classes from './PostMenu.module.css';

const PostMenu = props => {
  const { user } = props;

  return user !== {} && user !== undefined ? (
    <div className={classes.top}>
      <div className={classes.nameSection}>
        <UserNamePicture user={user} />
      </div>
      <div className={classes.right}>
        <i className={`fas fa-ellipsis-h ${classes.more}`}></i>
      </div>
    </div>
  ) : (
    'Nothing to Display'
  );
};

export default PostMenu;

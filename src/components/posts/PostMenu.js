import PropTypes from 'prop-types';
import UserNamePicture from '../home-page/UserNamePicture';
import classes from './PostMenu.module.css';

const PostMenu = props => {
  const { user } = props;

  const hasUser = () => user !== {} && user !== undefined;

  return (
    hasUser() && (
      <div className={classes.top}>
        <DisplayUserDetails user={user} />
        <MoreOptions />
      </div>
    )
  );
};

const DisplayUserDetails = props => {
  const { user } = props;
  const hasUser = () => user !== {} && user !== undefined;
  return (
    hasUser() && (
      <div className={classes.nameSection}>
        <UserNamePicture user={user} />
      </div>
    )
  );
};

const MoreOptions = props => {
  return (
    <div className={classes.right}>
      <i className={`fas fa-ellipsis-h ${classes.more}`}></i>
    </div>
  );
};

PostMenu.propTypes = {
  user: PropTypes.object.isRequired,
};
export default PostMenu;

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadUserAction,
  loadPostsAction,
  setCurrentPage,
} from '../../redux-store/actions/postActions';

import HomeLeft from '../home-page/HomeLeft';
import HomeCenter from '../home-page/HomeCenter';
import HomeRight from '../home-page/HomeRight';
import commonClass from './Common.module.css';
import { pageTypes } from '../../redux-store/actions/types';

const Home = props => {
  const { loadPostsAction, loadUserAction } = props;
  useEffect(() => {
    loadUserAction();
    loadPostsAction();
    setCurrentPage(pageTypes.HOME);
    //eslint-disable-next-line
  }, []);
  return (
    <div
      className={commonClass.wholeContainer}
      data-testid='home-page-container'
    >
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </div>
  );
};

Home.propTypes = {
  loadPostsAction: PropTypes.func.isRequired,
  loadUserAction: PropTypes.func.isRequired,
};

export default connect(null, {
  loadPostsAction,
  loadUserAction,
  setCurrentPage,
})(Home);

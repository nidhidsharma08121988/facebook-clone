import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  loadUserAction,
  loadPostsAction,
} from '../../redux-store/actions/postActions';

import HomeLeft from '../home-page/HomeLeft';
import HomeCenter from '../home-page/HomeCenter';
import HomeRight from '../home-page/HomeRight';

const Home = props => {
  const { loadPostsAction, loadUserAction } = props;
  useEffect(() => {
    loadUserAction();
    loadPostsAction();
    //eslint-disable-next-line
  }, []);
  return (
    <div className='home-page-container' data-testid='home-page-container'>
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </div>
  );
};

export default connect(null, { loadPostsAction, loadUserAction })(Home);

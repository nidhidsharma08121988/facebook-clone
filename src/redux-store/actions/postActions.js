import { loadUser, loadPosts } from '../../network/api_calls';
import { LOAD_POSTS, LOAD_USER } from './types.js';

export const loadUserAction = () => async dispatch => {
  const user = await loadUser('1');

  dispatch({
    type: LOAD_USER,
    payload: user,
  });
};

export const loadPostsAction = () => async dispatch => {
  const posts = await loadPosts('1');
  dispatch({
    type: LOAD_POSTS,
    payload: posts,
  });
};

import { loadUser, loadPosts, addPost } from '../../network/api_calls';
import { ADD_POST, LOAD_POSTS, LOAD_USER } from './types.js';

export const addPostAction = post => async dispatch => {
  const data = await addPost(post);
  console.log(data);
  dispatch({
    type: ADD_POST,
    payload: data,
  });
};

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

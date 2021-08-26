import { getUserPosts } from '../../network_calls/postAPICalls';
import { ADD_POST, DELETE_POST, EDIT_POST } from './types';

export const addPost = post => dispatch => {
  dispatch({
    type: ADD_POST,
    payload: post,
  });
};

export const editPost = post => dispatch => {
  dispatch({
    type: EDIT_POST,
    payload: post,
  });
};

export const deletePost = id => dispatch => {
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};

export const getPosts = () => dispatch => {
  const data = getUserPosts();
  dispatch({
    type: DELETE_POST,
    payload: data,
  });
};

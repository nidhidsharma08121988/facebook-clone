import { LOAD_POSTS, LOAD_USER } from '../actions/types';

const initialState = {
  currentUser: {},
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      console.log('load user');
      return {
        ...state,
        currentUser: { ...action.payload },
      };
    case LOAD_POSTS:
      console.log('load posts');
      return {
        ...state,
        posts: [...action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;

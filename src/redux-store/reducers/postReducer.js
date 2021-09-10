import { LOAD_POSTS, LOAD_USER } from '../actions/types';

const initialState = {
  currentUser: {},
  posts: [],
  post: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOAD_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
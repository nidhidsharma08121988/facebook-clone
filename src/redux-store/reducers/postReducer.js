import { ADD_POST, LOAD_POSTS, LOAD_USER } from '../actions/types';

const initialState = {
  currentUser: {},
  posts: [],
  post: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
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

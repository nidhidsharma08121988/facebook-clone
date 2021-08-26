import { ADD_POST, DELETE_POST, EDIT_POST } from '../actions/types';

const initialState = {};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
    case DELETE_POST:
    case EDIT_POST:
    default:
      return state;
  }
};

export default postReducer;

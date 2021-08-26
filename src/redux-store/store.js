import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {};
/* Creates a store enhancer that applies middleware 
to the dispatch method of the Redux store. 
This is handy for a variety of tasks, such as expressing asynchronous actions 
in a concise manner, 
or logging every action payload.
*/
const middleware = applyMiddleware([thunk]);
const store = createStore(rootReducer, initialState, middleware);
export default store;

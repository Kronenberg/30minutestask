import { combineReducers } from 'redux';

// @REDUCERS
import postsReducer from './postsReducer';
import createUserReducer from './createUserReducer';

// @ROOT REDUCER
const rootReducer =  combineReducers({
  postsReducer: postsReducer,
  authReducer: createUserReducer
});

export default rootReducer;
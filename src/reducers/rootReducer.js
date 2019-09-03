import { combineReducers } from 'redux';
import currentUser from './currentUserReducer';
import loggedIn from './loggedInReducer';
import postReducer from './postReducer';

export default combineReducers({
  currentUser,
  loggedIn, 
  postReducer
})
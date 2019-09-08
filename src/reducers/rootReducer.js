import { combineReducers } from 'redux';
import currentUser from './currentUserReducer';
import loggedIn from './loggedInReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import targetPostReducer from './targetPostReducer';

export default combineReducers({
  currentUser,
  loggedIn, 
  postReducer,
  commentReducer,
  usersReducer,
  userReducer,
  targetPostReducer
})
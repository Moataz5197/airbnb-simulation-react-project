import { combineReducers } from "redux";

import placesReducer from './placesReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  places :placesReducer,
  user : profileReducer,
});

import { combineReducers } from "redux";

import placesReducer from './placesReducer';
import profileReducer from './profileReducer';
import Places from "./hostPlacesReducer";

export default combineReducers({
  places :placesReducer,
  user : profileReducer,
  Places : Places
});

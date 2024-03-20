import { combineReducers } from "redux";
import counterReducer from "./counter/Reducer";

export default combineReducers({
  counter: counterReducer,
});

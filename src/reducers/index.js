import _counterReducer from "./_counterReducer";
import _loggedReducer from "./_isLoggedReducer";
import { combineReducers } from "redux";

// REDUCER
const allReducers = combineReducers({
  counter: _counterReducer,
  logged: _loggedReducer,
});

export default allReducers;

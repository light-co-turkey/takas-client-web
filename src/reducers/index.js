/* import { combineReducers } from 'redux';

const reducer = combineReducers({});

export default reducer; */
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

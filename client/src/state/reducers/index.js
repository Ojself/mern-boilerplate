import { combineReducers } from "redux";
import globalMessageReducer from "./globalMessage";
import authReducer from "./auth";

const reducers = combineReducers({
  globalMessage: globalMessageReducer,
  auth: authReducer,
});

export default reducers;

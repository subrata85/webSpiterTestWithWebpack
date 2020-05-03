import { combineReducers } from "redux";
import UserReducer from "./userReducer";

const rootReducers = combineReducers({
  userStore: UserReducer,
});

export default rootReducers;

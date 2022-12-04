import { combineReducers } from "redux";
import subscriberReducer from "./subscriber/reducer";
import viewReducer from "./view/reducer";
import commentReducer from "./comments/reducer";

const rootReducer = combineReducers({
  subscriber: subscriberReducer,
  view: viewReducer,
  comment: commentReducer,
});

export default rootReducer;

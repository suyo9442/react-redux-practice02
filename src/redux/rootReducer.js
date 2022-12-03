import subscriberReducer from "./subscriber/reducer";
import viewReducer from "./view/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  subscriber: subscriberReducer,
  view: viewReducer,
});

export default rootReducer;

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk"; // 액션에서 디스패치를 리턴해줄 수 있게함
import { composeWithDevTools } from "redux-devtools-extension";

// 여려 미들웨어를 사용하기위한 설정
const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

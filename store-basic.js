const redux = require("redux");
const createStore = redux.createStore;
// 미들웨어
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
// 두 이상의 reducer를 사용할 수 있게 해주는 라이브러리
const combineReducers = redux.combineReducers;

// ✅ actions
// redux의 모든 파일들이 사용할 수 있도록 type를 변수화
const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
const ADD_VIEWCOUNT = "ADD_VIEWCOUNT";
const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};
const addViewCount = () => {
  return {
    type: ADD_VIEWCOUNT,
  };
};

// ✅ reducers
// 초기 state 설정
const subscriberState = {
  subscribers: 365,
};
// requcer는 state와 action 인자를 받아 활용한다
const subscriberReducer = (state = subscriberState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    default:
      return state;
  }
};
const viewState = {
  viewCount: 100,
};
const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};
// 두 개 이상의 reducer 사용하기 : combine
const rootReducer = combineReducers({
  subscriber: subscriberReducer,
  view: viewReducer,
});

// ✅ store
// 두 번째 인자에는 미들웨어를 받아올 수 있음
const store = createStore(rootReducer, applyMiddleware(logger));

//// subscribe - view - dispatch
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());

// 터미널에서 node store.js 하면 state 값 확인 가능
console.log(store.getState()); // subscribers: 365

// dispatch는 action을 실행시켜주는 메소드
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
console.log(store.getState()); // subscribers: 367

// ✨ reducer +  reducer = store
// ✨ store.dispatch(action)

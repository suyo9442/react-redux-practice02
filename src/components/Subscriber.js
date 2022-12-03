import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/index";

// 객체 구조분해할당
// const {count, addSubscriber} = props
export const Subscriber = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <h2>구독자 수: {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  );
};

// 1️⃣ store로 부터 state를 가져와서 컴포넌트의 props로 보낼 것임
const mapStateToProps = ({ subscriber }) => {
  return {
    count: subscriber.count,
  };
};

// 2️⃣ store로 부터 state 변경함수를 가져와서 컴포넌트의 props로 보낼 것임
// ✔️ 오브젝트 형태로 바꾸기
const mapDispatchToProps = {
  addSubscriber, // =  addSubscribe: addSubscriber,
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

// 3️⃣ 가져온 state를 사용할 컴포넌트와 연결해준다
export default connect(mapStateToProps, mapDispatchToProps)(Subscriber);

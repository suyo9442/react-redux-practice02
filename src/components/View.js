import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

export const View = ({ count, addView }) => {
  const [number, setNumber] = useState(1);

  return (
    <div className="items">
      <h2>조회수: {count}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>구독하기</button>
    </div>
  );
};

const mapStateToProps = ({ view }) => {
  return {
    count: view.count,
  };
};

const mapDispatchToProps = {
  // 인자를 받을 수 있도록 세팅 👉 그 다음 액션에서도 설정해줘야함
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(View);

import React from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

export const View = ({ count, addView }) => {
  return (
    <div className="items">
      <h2>조회수: {count}</h2>
      <button onClick={() => addView()}>구독하기</button>
    </div>
  );
};

const mapStateToProps = ({ view }) => {
  return {
    count: view.count,
  };
};

const mapDispatchToProps = {
  addView,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);

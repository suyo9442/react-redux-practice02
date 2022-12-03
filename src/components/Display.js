import React from "react";
import { connect } from "react-redux";

export const Display = ({ count }) => {
  return (
    <div>
      <h3>구독자수: {count}</h3>
    </div>
  );
};

const mapStateToProps = ({ subscriber }) => {
  return {
    count: subscriber.count,
  };
};

export default connect(mapStateToProps)(Display);

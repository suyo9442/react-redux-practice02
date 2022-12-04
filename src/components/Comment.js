import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux/index";

export const Comment = ({ fetchComments, loading, comment }) => {
  useEffect(() => {
    fetchComments();
  }, []);

  const commentsItems = loading ? (
    <div> is loading...</div>
  ) : (
    comment.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <h3>{comment.email}</h3>
        <h3>{comment.body}</h3>
      </div>
    ))
  );

  return <div className="comments">{commentsItems}</div>;
};

const mapStateToProps = ({ comment }) => {
  return {
    comment: comment.items,
    loading: comment.loading,
  };
};
const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

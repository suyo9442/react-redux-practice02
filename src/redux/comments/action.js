import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../comments/type";

export const fetchComments = () => {
  // thunk를 통해 디스패치를 인자로✨ 넘겨받은 함수를 실행시킬 수 있음
  // 디스패치 인자를 통해 액션을 순차적으로✨ 실행시킬 수 있음
  return (dispatch) => {
    dispatch(fetchCommentsRequest());

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => dispatch(fetchCommentsSuccess(comments)))
      .catch((error) => dispatch(fetchCommentsFailure(error)));
  };
};

const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

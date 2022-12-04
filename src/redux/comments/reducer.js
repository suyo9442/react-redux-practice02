import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../comments/type";

const initialState = {
  items: [],
  loading: false,
  err: null,
};
export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        err: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default commentReducer;

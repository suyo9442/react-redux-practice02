import { ADD_VIEW } from "../view/type";

export const addView = (number) => {
  return {
    type: ADD_VIEW,
    payload: Number(number),
  };
};

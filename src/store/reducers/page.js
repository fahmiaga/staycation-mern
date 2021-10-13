import { FETCH_PAGE } from "../types";

const initialState = {};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default checkout;

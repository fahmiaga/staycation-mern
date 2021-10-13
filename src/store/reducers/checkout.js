import { CHECKOUT_BOOKING } from "../types";

const initialState = null;

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      // console.log("reducer ==>", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default checkout;

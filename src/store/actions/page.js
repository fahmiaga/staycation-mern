import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => (dispatch) => {
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then((res) => {
      // console.log("res ==>", res.data);
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: res.data,
        },
      });
      return res.data;
    });
};

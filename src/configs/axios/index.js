import axios from "axios";
import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use((res) => res, errorResponseHandler);

export default instance;

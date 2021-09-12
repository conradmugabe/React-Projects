import axios from "axios";
import { apiCallBegan } from "./api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) {
      return next(action);
    }

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:4000",
        url,
        method,
        data,
      });
      // dispatch(apiCallSucceded(response.data));
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data });
      }
    } catch (error) {
      // dispatch(apiRequestFailed(error));
      if (onError) {
        dispatch({ type: onError, payload: error.message });
      }
    }
  };

export default api;

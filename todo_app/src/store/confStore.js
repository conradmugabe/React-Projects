import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import api from "./apiMiddleware";

export const store = configureStore({
  reducer: { todo: todoReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

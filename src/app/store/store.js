import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../api-json-placeholder/api";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

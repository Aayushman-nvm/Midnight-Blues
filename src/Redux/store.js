import { configureStore } from "@reduxjs/toolkit";
import { deezerApi } from "./services/deezerApi";

export const store = configureStore({
  reducer: {
    [deezerApi.reducerPath]: deezerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deezerApi.middleware),
});
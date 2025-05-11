import { configureStore } from "@reduxjs/toolkit";
import { shazamApi } from "./shazam";
import playerReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});

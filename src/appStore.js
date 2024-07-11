import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/user/userSlice";
import movieReducer from "../src/features/movies/movieSlice";
import gptReducer from "../src/features/gpt/gptSlice";
import configReducer from "../src/features/config/configSlice";
import { apiSlice } from "./features/api/apiSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config: configReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default appStore;

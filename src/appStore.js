import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/user/userSlice";
import movieReducer from "../src/features/movies/movieSlice";
import gptReducer from "../src/features/gpt/gptSlice";
import configReducer from "../src/features/config/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;

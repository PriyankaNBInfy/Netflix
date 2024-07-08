import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/user/userSlice";
import movieReducer from "../src/features/movies/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;

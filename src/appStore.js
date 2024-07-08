import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/user/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

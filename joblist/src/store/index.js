import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobStore";

export default configureStore({
  reducer: {
    jobStore: jobReducer,
  },
});

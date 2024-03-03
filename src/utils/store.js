import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appslice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appslice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export default store;

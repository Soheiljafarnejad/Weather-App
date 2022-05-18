import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./asyncSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;

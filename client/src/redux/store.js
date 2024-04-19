import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slides/counterSlides";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

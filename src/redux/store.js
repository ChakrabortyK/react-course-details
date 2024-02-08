import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./courses";
import favorites from "./favorites";
const store = configureStore({
  reducer: {
    coursesReducer: courseSlice,
    favoritesReducer: favorites,
  },
});

export default store;

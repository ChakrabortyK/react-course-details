import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  courses: [],
};

const courseSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    getCourses: (state, action) => {
      state.courses = action.payload;
    },
    cleanDetails: (state, action) => {
      state.courses = [];
    },
    getSingleCourse: (state, action) => {
      const index = Number(action.payload);
      const map =
        state.courses && state.courses.find((element) => element.id === index);
      return map;
    },
  },
});

export const { toggleFavorite, getCourses, cleanDetails, getSingleCourse } =
  courseSlice.actions; //used by components
export default courseSlice.reducer; //used by store

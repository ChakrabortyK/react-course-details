import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  courses: [],
};

const favSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.courses.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex === -1) {
        // If the item does not exist in the array, add it
        state.courses.push(action.payload);
        // console.log(state.courses);
      } else {
        // If the item exists, remove it from the array
        state.courses = state.courses.filter(
          (item) => item.id !== action.payload.id
        );
        // console.log(state.courses);
      }
    },
  },
});

export const { toggleFavorite } = favSlice.actions; //used by components
export default favSlice.reducer; //used by store

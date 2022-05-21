import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      if (!state.courses.length) return { ...state, courses: action.payload };
      else console.log("already there");
    },
  },
});

export const selectCourses = (state) => state.courses.courses;

export const { addCourse, setCourses } = courseSlice.actions;

export const getCourses = () => async (dispatch) => {
  const resp = await fetch("http://localhost:5000/courses");
  const data = await resp.json();
  dispatch(setCourses(data));
};

export default courseSlice.reducer;

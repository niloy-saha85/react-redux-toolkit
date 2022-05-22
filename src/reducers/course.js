import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  status: {
    loading: false,
    error: false,
    errorMsg: null
  }
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      return { ...state, courses: action.payload };
    },
    setLoadingStatus: (state, action) => {
      return {
        ...state,
        status: {
          ...state.status,
          loading: action.payload
        }
      }
    },
    setErrorStatus: (state, action) => {
      return {
        ...state,
        status: {
          ...state.status,
          error: true,
          errorMsg: action.payload
        }
      }
    }
  },
});

export const selectCourses = (state) => state.courses.courses;
export const selectCoursesStatus = (state) => state.courses.status;

export const { addCourse, setCourses, setErrorStatus, setLoadingStatus } = courseSlice.actions;

export const getCourses = () => async (dispatch) => {
  const resp = await fetch("http://localhost:5000/courses");
  const data = await resp.json();
  dispatch(setCourses(data));
};

export default courseSlice.reducer;

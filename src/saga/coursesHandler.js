import axios from "axios";
import { put } from "redux-saga/effects";
import {
  setCourses,
  setErrorStatus,
  setLoadingStatus,
} from "../reducers/course";

export function* getCourses() {
  yield put(setLoadingStatus(true));
  try {
    const { data: courses } = yield axios.get("http://localhost:5000/courses");
    yield put(setCourses(courses));
  } catch (error) {
    yield put(setErrorStatus("Error loading Courses"));
  }
  yield put(setLoadingStatus(false));
}

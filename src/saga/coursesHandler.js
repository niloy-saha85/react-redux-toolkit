import axios from "axios";
import { put } from "redux-saga/effects";
import { setCourses } from "../reducers/course";

export function* getUsers() {
  const { data: courses } = yield axios.get("http://localhost:5000/courses");
  yield put(setCourses(courses));
}

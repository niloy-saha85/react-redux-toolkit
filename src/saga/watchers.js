import { takeLatest } from "redux-saga/effects";
import { getUsers } from "./coursesHandler";
import { GET_COURSES } from "./types";

export function* fetchCourses() {
  yield takeLatest(GET_COURSES, getUsers);
}
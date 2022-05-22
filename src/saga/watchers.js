import { takeLatest } from "redux-saga/effects";
import { getCourses } from "./coursesHandler";
import { addEnquiryHandler, getEnquiry } from "./enquiryHandler";
import { ADD_ENQUIRY, GET_COURSES, GET_ENQUIRY } from "./types";

export function* fetchCourses() {
  yield takeLatest(GET_COURSES, getCourses);
}

export function* fetchEnquiry() {
  yield takeLatest(GET_ENQUIRY, getEnquiry);
}

export function* postEnquiry() {
  yield takeLatest(ADD_ENQUIRY, addEnquiryHandler);
}

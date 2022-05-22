import axios from "axios";
import { put } from "redux-saga/effects";
import {
  addEnquiry,
  setEnquiry,
  setErrorStatus,
  setFormSubmitted,
  setLoadingStatus,
} from "../reducers/enquiry";

export function* addEnquiryHandler(params) {
  yield put(setLoadingStatus(true));
  try {
    yield axios.post("http://localhost:5000/enquiry", params.payload);
    yield put(addEnquiry(params.payload));
    yield put(setFormSubmitted(true));
  } catch (error) {
    yield put(setErrorStatus("Error adding new enquiry"));
  }
  yield put(setLoadingStatus(false));
}

export function* getEnquiry() {
  yield put(setLoadingStatus(true));
  try {
    const { data: enquiry } = yield axios.get("http://localhost:5000/enquiry");
    yield put(setEnquiry(enquiry));
  } catch (error) {
    yield put(setErrorStatus("Error loading enquiry"));
  }
  yield put(setLoadingStatus(false));
}

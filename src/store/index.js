import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../reducers/course";
import enquiryReducer from "../reducers/enquiry";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    enquiry: enquiryReducer
  },
  // middleware: [as]
});

export default store;

import { configureStore,  } from "@reduxjs/toolkit";
import courseReducer from "../reducers/course";
import enquiryReducer from "../reducers/enquiry";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: {
    courses: courseReducer,
    enquiry: enquiryReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...middlewares])
});

sagaMiddleware.run(rootSaga);

export default store;

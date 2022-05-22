import { all, call, spawn } from "redux-saga/effects";
import { fetchCourses, fetchEnquiry, postEnquiry } from "./watchers";

function* rootSaga() {
  const sagas = [fetchCourses, fetchEnquiry, postEnquiry];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (error) {
            console.error(error);
          }
        }
      })
    )
  );
}

export default rootSaga;

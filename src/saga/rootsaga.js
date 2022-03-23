import { all, fork } from "redux-saga/effects";
import {
  watchGetSaga,
  watchPostSaga,
  watchDeleteSaga,
  watchOneGetSaga,
  watchUpdateSaga,
} from "./watchers";
function* rootSaga() {
  yield all([
    fork(watchOneGetSaga),
    fork(watchGetSaga),
    fork(watchPostSaga),
    fork(watchDeleteSaga),

    fork(watchUpdateSaga),
  ]);
}
export default rootSaga;

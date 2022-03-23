import { takeEvery, takeLatest, take, call } from "redux-saga/effects";

import {
  handleGetUser,
  handlePostUser,
  handleDeleteUser,
  handleOneGetUser,
  handleUpdateUser,
} from "./handlers/handler";
function* watchGetSaga() {
  yield takeEvery("REQUEST", handleGetUser);
}
function* watchOneGetSaga() {
  yield takeLatest("GETONEUSERREQUEST", handleOneGetUser);
}
function* watchPostSaga() {
  yield takeLatest("POSTREQUEST", handlePostUser);
}
function* watchDeleteSaga() {
  //console.log(action.payload);
  yield takeLatest("DELETEREQUEST", handleDeleteUser);
  //yield call(handleDeleteUser, action.payLoad);
}
function* watchUpdateSaga() {
  yield takeLatest("UPDATEREQUEST", handleUpdateUser);
}
export {
  watchGetSaga,
  watchPostSaga,
  watchDeleteSaga,
  watchOneGetSaga,
  watchUpdateSaga,
};

import { call, put } from "redux-saga/effects";
import {
  fetcher,
  poster,
  deleter,
  oneFetcher,
  updater,
} from "../requesters/requester";
//import poster from "../requesters/requester";
import {
  success,
  failure,
  postSuccess,
  deleteSuccess,
  getOneSuccess,
  updateSuccess,
} from "../../redux/Useraction";

function* handleGetUser() {
  try {
    const user = yield call(fetcher);

    yield put(success(user));
  } catch (err) {
    yield put(failure(err.message));
  }
}
function* handleOneGetUser({ PayLoad: { id1 } }) {
  try {
    const user = yield call(oneFetcher, { id1 });

    yield put(getOneSuccess(user));
  } catch (err) {
    yield put(failure(err.message));
  }
}
function* handlePostUser(action) {
  try {
    yield call(poster, action.payLoad);

    yield put(postSuccess());
  } catch (err) {
    yield put(failure(err.message));
  }
}
function* handleUpdateUser({ payLoad: { id1, userObj } }) {
  try {
    yield call(updater, { id1, userObj });

    yield put(updateSuccess());
  } catch (err) {
    yield put(failure(err.message));
  }
}
function* handleDeleteUser(action) {
  try {
    yield call(deleter, action.payload);

    yield put(deleteSuccess());
  } catch (err) {
    yield put(failure(err.message));
  }
}
export {
  handleGetUser,
  handlePostUser,
  handleDeleteUser,
  handleOneGetUser,
  handleUpdateUser,
};

import { AUTH } from "actionsType";
import { takeLatest } from "redux-saga/effects";
import { getToken, getUserProfile } from "./login";

export default function* authSaga() {
  yield takeLatest(AUTH.LOGIN.HANDLER, getToken);
  yield takeLatest(AUTH.GET_USER_PROFILE.HANDLER, getUserProfile);
}

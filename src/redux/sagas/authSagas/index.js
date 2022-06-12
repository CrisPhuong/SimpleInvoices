import { AUTH } from "actionsType";
import { takeLatest } from "redux-saga/effects";
import { getToken, getUserProfile } from "./login";

export default function* authSaga() {
  yield takeLatest(AUTH.LOGIN_WITH_GOOGLE.HANDLER, getToken);
  yield takeLatest(AUTH.GET_USER_PROFILE.HANDLER, getUserProfile);
  // yield takeLatest(AUTH.FACEBOOK_SIGN_IN.HANDLER, signInFacebookSaga);
  // yield takeLatest(AUTH.SIGN_IN.HANDLER, signInSaga);
  // yield takeLatest(AUTH.SIGN_UP.HANDLER, signUpSaga);
}

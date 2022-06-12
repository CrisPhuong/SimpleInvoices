import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getUserProfileFailure,
  getUserProfileSuccess,
  loginWithGoogleFailure,
  loginWithGoogleSuccess,
} from "actions/auth";
import { API_URL } from "constants/apiUrl";
import { call, put } from "redux-saga/effects";
import APIUtils from "utils/apiUtils";

export const apiLogin = params => {
  return APIUtils.postFirebase(`${API_URL.GET_TOKEN}`, params);
};

export const apiGetUserProfile = () => {
  return APIUtils.get(
    `https://sandbox.101digital.io/membership-service/1.2.0/users/me`
  );
};

export function* getToken({ payload, success, failure }) {
  try {
    const params = payload;
    const data = yield call(apiLogin, params);

    if (data?.status === 200) {
      yield AsyncStorage.setItem("ACCESS_TOKEN", data.data.access_token);
      yield put(loginWithGoogleSuccess(data.data));
      success && success();
    } else {
      yield put(loginWithGoogleFailure(data.response));
      failure && failure(data.response);
    }
  } catch (error) {
    yield put(loginWithGoogleFailure(error));
    failure && failure(error);
  }
}

export function* getUserProfile({ success, failure }) {
  try {
    const data = yield call(apiGetUserProfile);
    console.log("data", data);

    if (data?.status === 200) {
      yield put(getUserProfileSuccess(data.data));
      success && success();
    } else {
      yield put(getUserProfileFailure(data.response));
      failure && failure(data.response);
    }
  } catch (error) {
    yield put(getUserProfileFailure(error));
    failure && failure(error);
  }
}

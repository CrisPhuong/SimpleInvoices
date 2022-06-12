import { AUTH } from "actionsType";

export const loginWithGoogleHandle = ({ params, success, failure }) => ({
  type: AUTH.LOGIN_WITH_GOOGLE.HANDLER,
  payload: params,
  success,
  failure,
});

export const loginWithGoogleSuccess = payload => ({
  type: AUTH.LOGIN_WITH_GOOGLE.SUCCESS,
  payload,
});

export const loginWithGoogleFailure = payload => ({
  type: AUTH.LOGIN_WITH_GOOGLE.FAILURE,
  payload,
});

export const getUserProfileHandle = ({ success, failure }) => ({
  type: AUTH.GET_USER_PROFILE.HANDLER,
  success,
  failure,
});

export const getUserProfileSuccess = payload => ({
  type: AUTH.GET_USER_PROFILE.SUCCESS,
  payload,
});

export const getUserProfileFailure = payload => ({
  type: AUTH.GET_USER_PROFILE.FAILURE,
  payload,
});

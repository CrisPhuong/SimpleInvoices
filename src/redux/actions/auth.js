import { AUTH } from "actionsType";

export const loginHandle = ({ params, success, failure }) => ({
  type: AUTH.LOGIN.HANDLER,
  payload: params,
  success,
  failure,
});

export const loginSuccess = payload => ({
  type: AUTH.LOGIN.SUCCESS,
  payload,
});

export const loginFailure = payload => ({
  type: AUTH.LOGIN.FAILURE,
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

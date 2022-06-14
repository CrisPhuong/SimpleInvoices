/*
  func Helper gen actionType
*/
export const asyncTypes = action => ({
  ORIGIN: action,
  HANDLER: `${action}_HANDLER`,
  PENDING: `${action}_PENDING`,
  START: `${action}_START`,
  MORE: `${action}_MORE`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  ERROR: `${action}_ERROR`,
  CLEAR: `${action}_CLEAR`,
  STORE: `${action}_STORE`,
  END: `${action}_END`,
});
/*
  CONNECTIVITY
  - receive, sound notification
*/
export const CONNECTIVITY = {
  APP_CONNECTIVITY_CHANGE: "CONNECTIVITY/APP_CONNECTIVITY_CHANGE",
};

export const ERROR = {
  SHOW: asyncTypes("ERROR/SHOW"),
  HIDE: asyncTypes("ERROR/HIDE"),
};

export const AUTH = {
  LOGIN: asyncTypes("AUTH/LOGIN"),
  GET_USER_PROFILE: asyncTypes("AUTH/GET_USER_PROFILE"),
};

export const SYSTEM = {
  SHOW_ERROR: asyncTypes("SYSTEM/SHOW_ERROR"),
  CLEAR_ERROR: asyncTypes("SYSTEM/CLEAR_ERROR"),
};

export const MASTER_DATA = {
  GET_ALL: asyncTypes("MASTER_DATA/GET_ALL"),
};

export const QUESTION = {
  CREATE: asyncTypes("QUESTION/CREATE"),
};

export const INVOICES = {
  GET_LIST_INVOICES: asyncTypes("INVOICES/GET_LIST_INVOICES"),
  CREATE_INVOICES: asyncTypes("INVOICES/CREATE_INVOICES"),
};

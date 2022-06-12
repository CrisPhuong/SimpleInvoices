import moment from "moment";
const RESPONSE_CODE = {
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIME_OUT: 408,
  UNAUTHORIZED_STATUS: 401,
};

export function merge2Array(array1, array2, key) {
  const array12 = [...array1, ...array2];
  const data = array12.reduce((result, item) => {
    const isHave = result.some(e => e[key] === item[key]);
    if (isHave) {
      return result.map(e => {
        if (e[key] === item[key]) {
          return { ...e, ...item };
        }
        return e;
      });
    }
    // result.push(item);

    return [...result, item];
  }, []);
  return data;
}

function convertDataError(error, msg) {
  let { code, message, data, status } = error;
  switch (status) {
    case RESPONSE_CODE.NOT_FOUND:
      code = RESPONSE_CODE.NOT_FOUND;
      break;
  }
  let result = RESPONSE_CODE[code];
  if (result) {
    return {
      code: data && data.code,
      message: msg ? msg + result : result,
      status,
    };
  }
  if (message && message.search("Cannot read property") >= 0) {
    return {
      code: RESPONSE_CODE.UNDEFINED,
      message: "errMessage.query_error",
      status,
    };
  }
  if (code === "auth/network-request-failed") {
    return {
      code: RESPONSE_CODE.NOT_FOUND,
      message: "errMessage.network_error",
      status,
    };
  }
  if (
    (message && message.search("Network Error") >= 0) ||
    (msg && msg.search("Network Error") >= 0)
  ) {
    return {
      code: RESPONSE_CODE.NOT_FOUND,
      message: "errMessage.network_error",
      status,
    };
  }
  return {
    code: code || (data && data?.error?.code),
    message:
      message ||
      (data && (data.message || data?.error?.message)) ||
      "errMessage.error_tryAgain",
    status,
  };
}

export function handleErrorMessage(err, msg) {
  const { response } = err;
  if (response) {
    return convertDataError(response, msg);
  } else {
    return convertDataError(err, msg);
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { handleErrorMessage } from "helpers/handleError";
import { store } from "store/configureStore";
import qs from "qs";

const skipTokenUrl = [];
const REQUEST_TIMEOUT = 60000;

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  async config => {
    let token = await AsyncStorage.getItem("ACCESS_TOKEN");
    !token ? (token = store?.getState()?.auth?.accessToken) : null;

    if (token && skipTokenUrl.indexOf(config.url) === -1) {
      config.headers.authorization = "Bearer " + token;
    } else {
      config.headers.authorization = null;
    }
    return config;
  },
  error => {
    return handleErrorMessage(error);
  }
);

// interceptor to handle refresh token
axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (!error.response) {
      return handleErrorMessage({}, "Network Error");
    }
    return handleErrorMessage(error);
  }
);

export default class APIUtils {
  static get(uri, params, headers) {
    return new Promise((resolve, reject) =>
      axios
        .get(uri, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // Accept: "text/plain",
            ...headers,
          },
          timeout: REQUEST_TIMEOUT,
          params,
        })
        .then(response => {
          console.log(">>>>>>> Response>>>>>> : ", response);
          const { data } = response;
          resolve(response);
        })
        .catch(err => {
          reject(handleErrorMessage(err));
        })
    );
  }

  static getWithoutAcceptText(uri, params, headers) {
    return new Promise((resolve, reject) =>
      axios
        .get(uri, {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            ...headers,
          },
          timeout: REQUEST_TIMEOUT,
          params,
        })
        .then(response => {
          console.log(">>>>>>> Response>>>>>> : ", response);
          //  const { data } = response;
          resolve(response);
        })
        .catch(err => {
          reject(handleErrorMessage(err));
        })
    );
  }

  static post(uri, body, headers) {
    return new Promise((resolve, reject) => {
      axios
        .post(uri, body, {
          timeout: REQUEST_TIMEOUT,
          headers: {
            "Content-type": "application/json",
            ...headers,
          },
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          //  console.log('[error]', { err });
          console.log("errr 3", { err });
          reject(handleErrorMessage(err));
        });
    });
  }

  static delete(uri, deleteBody, headers) {
    console.log("deleteBody", deleteBody);
    return new Promise((resolve, reject) => {
      axios
        .delete(uri, {
          timeout: REQUEST_TIMEOUT,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          data: deleteBody,
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          //  console.log('[error]', { err });
          console.log("errr 4", { err });
          reject(handleErrorMessage(err));
        });
    });
  }

  static postFormData(uri, postData, headers) {
    console.log(">>>>>>> Request>>>>>> : ", postData);
    return new Promise((resolve, reject) => {
      axios
        .post(uri, postData, {
          timeout: REQUEST_TIMEOUT,
          headers: {
            "Content-Type": "multipart/form-data",
            ...headers,
          },
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log("[error 5]", { err });
          reject(handleErrorMessage(err));
        });
    });
  }

  static put(uri, updateData) {
    return new Promise((resolve, reject) =>
      axios
        .put(uri, updateData, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: REQUEST_TIMEOUT,
        })
        .then(response => {
          //  const { data } = response;
          console.log("response", response);
          resolve(response);
        })
        .catch(err => {
          console.log("err", err);

          // console.log('[error]', { err });
          reject(handleErrorMessage(err));
        })
    );
  }

  static getMultiple(listGetRequest) {
    return new Promise((resolve, reject) => {
      axios
        .all(listGetRequest)
        .then(
          axios.spread((...responses) => {
            resolve(responses);
          })
        )
        .catch(errors => {
          reject(handleErrorMessage(errors));
        });
    });
  }

  static postFirebase = (uri, postData, headers) => {
    let config = {
      method: "post",
      url: uri,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(postData),
    };

    return new Promise((resolve, reject) => {
      axios(config)
        .then(response => {
          console.log("responseFB", response);
          resolve(response);
        })
        .catch(err => {
          //  console.log('[error]', { err });
          console.log("errr 3", { err });
          reject(handleErrorMessage(err));
        });
    });
  };
}

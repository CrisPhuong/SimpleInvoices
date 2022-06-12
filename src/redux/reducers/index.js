import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import auth from "./auth";
import loading from "./loading";
import questionReducer from "./question";
import setting from "./settings";
import system from "./system";

const systemPersistConfig = {
  key: "system",
  storage: AsyncStorage,
  whitelist: [],
  version: 1.0,
};

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["isLogin", "tokenInfo"],
  version: 1.0,
};

const settingPersistConfig = {
  key: "setting",
  storage: AsyncStorage,
  whitelist: ["lang"],
  version: 1.0,
};

const questionPersistConfig = {
  key: "question",
  storage: AsyncStorage,
  whitelist: ["questionList"],
  version: 1.0,
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  system: persistReducer(systemPersistConfig, system),
  loading,
  setting: persistReducer(settingPersistConfig, setting),
  question: persistReducer(questionPersistConfig, questionReducer),
});

import { all, fork } from "redux-saga/effects";
import authSagas from "./authSagas";
import invoicesSaga from "./invoices";

export default function* rootSaga() {
  yield all([fork(authSagas)]);
  yield all([fork(invoicesSaga)]);
}

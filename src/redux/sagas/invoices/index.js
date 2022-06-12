import { INVOICES } from "actionsType";
import { takeLatest } from "redux-saga/effects";
import { createInvoices, getListInvoices } from "./listInvoices";

export default function* invoicesSaga() {
  yield takeLatest(INVOICES.GET_LIST_INVOICES.HANDLER, getListInvoices);
  yield takeLatest(INVOICES.CREATE_INVOICES.HANDLER, createInvoices);
}

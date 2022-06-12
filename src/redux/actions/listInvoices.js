import { INVOICES } from "actionsType";

export const getListInvoicesHandler = ({ params, success, failure }) => ({
  type: INVOICES.GET_LIST_INVOICES.HANDLER,
  payload: params,
  success,
  failure,
});

export const getListInvoicesSuccess = payload => ({
  type: INVOICES.GET_LIST_INVOICES.SUCCESS,
  payload,
});

export const getListInvoicesFailure = payload => ({
  type: INVOICES.GET_LIST_INVOICES.FAILURE,
  payload,
});

export const createInvoicesHandler = ({ params, success, failure }) => ({
  type: INVOICES.CREATE_INVOICES.HANDLER,
  payload: params,
  success,
  failure,
});

export const createInvoicesSuccess = payload => ({
  type: INVOICES.CREATE_INVOICES.SUCCESS,
  payload,
});

export const createInvoicesFailure = payload => ({
  type: INVOICES.CREATE_INVOICES.FAILURE,
  payload,
});

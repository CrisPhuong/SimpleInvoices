import { QUESTION } from 'actionsType';

/**
 * ===== Get all system actions =====
 */
export const createQuestionHandle = payload => ({
  type: QUESTION.CREATE.HANDLER,
  payload,
});

export const createQuestionSuccess = payload => ({
  type: QUESTION.CREATE.SUCCESS,
  payload,
});

export const createQuestionFailure = payload => ({
  type: QUESTION.CREATE.FAILURE,
  payload,
});

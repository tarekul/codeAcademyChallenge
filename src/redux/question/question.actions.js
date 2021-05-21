import questionActionTypes from './question.types';

export const setAnswerSelection = a => ({
  type: questionActionTypes.SET_ANSWER_SELECTION,
  payload: a,
});

export const resetAnswerSelection = () => ({
  type: questionActionTypes.RESET_ANSWER_SELECTION,
});

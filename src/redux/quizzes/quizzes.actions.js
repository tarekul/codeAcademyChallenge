import { quizzesActionTypes } from './quizzes.types';

export const setTotalNumOfQuizzes = num => ({
  type: quizzesActionTypes.SET_TOTAL_NUM_QUIZZES,
  payload: num,
});

export const incrementQuiz = () => ({
  type: quizzesActionTypes.INCREMENT_QUIZ,
});

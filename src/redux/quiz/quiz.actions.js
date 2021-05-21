import { quizActionTypes } from './quiz.types';

export const setTotalQuestions = num => ({
  type: quizActionTypes.SET_TOTAL_NUM_QUESTIONS,
  payload: num,
});

export const incrementCurrentQuestionIdx = () => ({
  type: quizActionTypes.INCREMENT_CURRENT_QUESTION_IDX,
});

export const incrementNumberCorrect = () => ({
  type: quizActionTypes.INCREMENT_NUMBER_CORRECT,
});

export const shuffleAndSetChoices = (correctAnswer, incorrectAnswers) => ({
  type: quizActionTypes.SHUFFLE_AND_SET_CHOICES,
  payload: [correctAnswer, ...incorrectAnswers],
});

export const toggleShowSummary = () => ({
  type: quizActionTypes.TOGGLE_SHOW_SUMMARY,
});

export const resetState = () => ({
  type: quizActionTypes.RESET_STATE,
});

import { quizActionTypes } from './quiz.types';

import { shuffleChoices } from '../utils';

const INITIAL_STATE = {
  totalQuestions: 0,
  currentQuestionIdx: 0,
  numCorrect: 0,
  shuffledChoices: [],
  showSummary: false,
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case quizActionTypes.SET_TOTAL_NUM_QUESTIONS:
      return {
        ...state,
        totalQuestions: action.payload,
      };
    case quizActionTypes.INCREMENT_CURRENT_QUESTION_IDX:
      return {
        ...state,
        currentQuestionIdx: state.currentQuestionIdx + 1,
      };
    case quizActionTypes.INCREMENT_NUMBER_CORRECT:
      return {
        ...state,
        numCorrect: state.numCorrect + 1,
      };
    case quizActionTypes.SHUFFLE_AND_SET_CHOICES:
      return {
        ...state,
        shuffledChoices: shuffleChoices(action.payload),
      };
    case quizActionTypes.TOGGLE_SHOW_SUMMARY:
      return {
        ...state,
        showSummary: !state.showSummary,
      };
    case quizActionTypes.RESET_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default quizReducer;

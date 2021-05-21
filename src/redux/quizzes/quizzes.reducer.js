import { quizzesActionTypes } from './quizzes.types';

const INITIAL_STATE = {
  currentQuiz: 0,
  totalQuizzes: 0,
};

const quizzesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case quizzesActionTypes.SET_TOTAL_NUM_QUIZZES:
      return {
        ...state,
        totalQuizzes: action.payload,
      };
    case quizzesActionTypes.INCREMENT_QUIZ:
      return {
        ...state,
        currentQuiz: state.currentQuiz + 1,
      };
    default:
      return state;
  }
};

export default quizzesReducer;

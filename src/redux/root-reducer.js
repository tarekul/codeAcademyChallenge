import { combineReducers } from 'redux';

import quizzesReducer from '../redux/quizzes/quizzes.reducer';
import quizReducer from './quiz/quiz.reducer';
import questionReducer from './question/question.reducer';

const rootReducer = combineReducers({
  quizzes: quizzesReducer,
  quiz: quizReducer,
  question: questionReducer,
});

export default rootReducer;

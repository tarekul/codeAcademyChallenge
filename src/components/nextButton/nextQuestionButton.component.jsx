import React from 'react';
import './nextButton.styles.css';

import { connect } from 'react-redux';

import {
  incrementCurrentQuestionIdx,
  toggleShowSummary,
} from '../../redux/quiz/quiz.actions';

const NextQuestionButton = ({
  totalQuestions,
  currentQuestionIdx,
  incrementCurrentQuestionIdx,
  toggleShowSummary,
  answer,
}) => {
  const nextQuestion = () => {
    if (answer) {
      if (currentQuestionIdx < totalQuestions - 1) {
        incrementCurrentQuestionIdx();
      } else toggleShowSummary();
    }
  };

  return (
    <div onClick={e => nextQuestion()}>
      <button className="next">Next</button>
    </div>
  );
};

const mapStateToProps = state => ({
  currentQuestionIdx: state.quiz.currentQuestionIdx,
  totalQuestions: state.quiz.totalQuestions,
  answer: state.question.answer,
});

const mapDispatchToProps = dispatch => ({
  incrementCurrentQuestionIdx: () => {
    dispatch(incrementCurrentQuestionIdx());
  },
  toggleShowSummary: () => {
    dispatch(toggleShowSummary());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestionButton);

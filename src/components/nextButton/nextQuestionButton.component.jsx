import React from 'react';
import './nextButton.styles.css';

import { connect } from 'react-redux';

import {
  incrementCurrentQuestionIdx,
  shuffleAndSetChoices,
  toggleShowSummary,
} from '../../redux/quiz/quiz.actions';

import { resetAnswerSelection } from '../../redux/question/question.actions';

const NextQuestionButton = ({
  quiz,
  totalQuestions,
  currentQuestionIdx,
  incrementCurrentQuestionIdx,
  shuffleAndSetChoices,
  resetAnswerSelection,
  toggleShowSummary,
  answer,
}) => {
  const nextQuestion = () => {
    if (answer) {
      if (currentQuestionIdx < totalQuestions - 1) {
        incrementCurrentQuestionIdx();
        const question = quiz[currentQuestionIdx + 1];
        shuffleAndSetChoices(question.correctAnswer, question.incorrectAnswers);
        // resetAnswerSelection();
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
  shuffleAndSetChoices: (correctAnswer, incorrectAnswers) => {
    dispatch(shuffleAndSetChoices(correctAnswer, incorrectAnswers));
  },
  toggleShowSummary: () => {
    dispatch(toggleShowSummary());
  },
  resetAnswerSelection: () => {
    dispatch(resetAnswerSelection());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestionButton);

import React from 'react';
import './nextButton.styles.css';

import { connect } from 'react-redux';

import { incrementQuiz } from '../../redux/quizzes/quizzes.actions';
import { resetState } from '../../redux/quiz/quiz.actions';

function NextQuizButton(props) {
  const nextQuiz = () => {
    props.resetState();
    props.incrementQuiz();
  };
  return (
    <div onClick={e => nextQuiz()}>
      <button className="next">Next</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  incrementQuiz: () => {
    dispatch(incrementQuiz());
  },
  resetState: () => {
    dispatch(resetState());
  },
});

export default connect(null, mapDispatchToProps)(NextQuizButton);

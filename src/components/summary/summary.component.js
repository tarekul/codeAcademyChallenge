import React from 'react';
import './summary.styles.css';

import { connect } from 'react-redux';

import { getMessage } from '../../data/messages';

import NextQuizButton from '../nextButton/nextQuizButton.component';

function Summary({ numCorrect, totalQuestions }) {
  return (
    <div>
      <p className="summaryText">
        You got <span id="bold">{numCorrect}</span>of{' '}
        <span id="bold">{totalQuestions}</span> questions right.
        <br />
      </p>

      <p className="summaryText">{getMessage()}</p>

      <NextQuizButton />
    </div>
  );
}

const mapStateToProps = state => ({
  totalQuestions: state.quiz.totalQuestions,
  numCorrect: state.quiz.numCorrect,
});

export default connect(mapStateToProps)(Summary);

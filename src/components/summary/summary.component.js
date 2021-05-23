import React from 'react';
import './summary.styles.css';

import { getMessage } from '../../data/messages';

function Summary({ numCorrect, totalQuestions, quiz, userAnswers }) {
  return (
    <div>
      <p className="summaryText">
        You got <span id="bold">{numCorrect}</span>of{' '}
        <span id="bold">{totalQuestions}</span> questions right.
        <br />
      </p>

      <p className="summaryText">{getMessage()}</p>
    </div>
  );
}

export default Summary;

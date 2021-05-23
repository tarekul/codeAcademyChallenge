import React from 'react';
import './nextButton.styles.css';

const NextQuestionButton = ({ isButtonActive, nextQuestion }) => {
  return (
    <div onClick={e => (isButtonActive ? nextQuestion() : null)}>
      <button className="next">Next question</button>
    </div>
  );
};

export default NextQuestionButton;

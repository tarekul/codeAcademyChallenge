import React from 'react';
import './nextButton.styles.css';

function NextQuizButton({ nextQuiz }) {
  return (
    <div onClick={e => nextQuiz()}>
      <button className="next">Next</button>
    </div>
  );
}

export default NextQuizButton;

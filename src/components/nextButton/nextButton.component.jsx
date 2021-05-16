import React from 'react';
import './nextButton.styles.css';

export default function NextButton({ nextQuestion }) {
  return (
    <div onClick={e => nextQuestion()}>
      <button className="next">Next</button>
    </div>
  );
}

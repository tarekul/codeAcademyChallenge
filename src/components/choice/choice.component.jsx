import React from 'react';
import './choice.styles.css';

function Choice({ choice, index, setAnswer, answer, color }) {
  let choiceHighlight = 'choice';

  if (color === 'green') choiceHighlight += ' green';
  if (color === 'red') choiceHighlight += ' red';

  return (
    <p
      className={choiceHighlight}
      onClick={e => (!answer ? setAnswer(choice) : null)}
    >
      <span id="bold">{String.fromCharCode(index + 97).toUpperCase()}.</span>
      {choice}
    </p>
  );
}

export default Choice;

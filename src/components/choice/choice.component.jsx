import React from 'react';
import './choice.styles.css';

export default function Choice({
  choice,
  index,
  selectedAnswer,
  correct,
  incorrect,
}) {
  let choiceHighlight = 'choice';

  if (correct) choiceHighlight += ' green';
  if (incorrect) choiceHighlight += ' red';

  return (
    <p
      className={choiceHighlight}
      onClick={e => (selectedAnswer ? selectedAnswer(choice) : '')}
    >
      <span className="letter">
        {String.fromCharCode(index + 97).toUpperCase()}.
      </span>
      {choice}
    </p>
  );
}

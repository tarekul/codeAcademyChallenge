import React from 'react';
import './choice.styles.css';

export default function Choice({
  choice,
  index,
  selectedAnswer,
  correct,
  incorrect,
}) {
  let result;
  if (!correct && !incorrect) result = 'choice';
  if (correct) result = 'choice green';
  if (incorrect) result = 'choice red';

  return (
    <p
      className={result}
      onClick={e => (selectedAnswer ? selectedAnswer(choice) : '')}
    >
      <span className="letter">
        {String.fromCharCode(index + 97).toUpperCase()}.
      </span>
      {choice}
    </p>
  );
}

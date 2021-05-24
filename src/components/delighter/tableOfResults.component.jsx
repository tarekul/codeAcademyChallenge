import React from 'react';
import './tableOfResults.styles.css';

export default function TableOfResults({ quiz, userAnswers }) {
  const checkAnswer = (userAnswer, trueAnswer) => {
    const result = userAnswer === trueAnswer ? true : false;
    if (result) return <p className="correct">Correct</p>;
    else
      return (
        <p
          className="incorrect
    "
        >
          Incorrect
        </p>
      );
  };
  return (
    <div>
      <div className="row">
        <div className="col">Result</div>
      </div>
      {quiz.map((question, i) => {
        return (
          <div key={i} className="row">
            <div className="col">{question.text}</div>
            <div className="col">Your Answer: {userAnswers[i]}</div>
            <div className="col">
              {checkAnswer(userAnswers[i], question.correctAnswer)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import './title.styles.css';

export default function Title({ currentQuiz }) {
  return <h2 className="title">{currentQuiz}</h2>;
}

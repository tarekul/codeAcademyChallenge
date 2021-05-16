import React from 'react';
import './quiz.styles.css';

import Choice from '../choice/choice.component';
import NextButton from '../nextButton/nextButton.component';

export default class Quiz extends React.Component {
  state = {
    quiz: this.props.quiz,
    currentQuestionNum: 0,
    numQuestions: this.props.quiz.length,
    isCorrect: null,
    choosen: null,
    shuffled: null,
  };

  componentDidMount() {
    const shuffled = this.shuffleChoices();
    this.setState({ shuffled });
  }

  shuffleChoices = () => {
    const { quiz, currentQuestionNum } = this.state;
    const currentQuestion = quiz[currentQuestionNum];

    //QuestionChoices
    const choices = currentQuestion.incorrectAnswers;
    choices.push(currentQuestion.correctAnswer);

    //shuffle the questions
    return choices
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
  };

  selectedAnswer = choosen => {
    if (!this.state.choosen) {
      const { quiz, currentQuestionNum } = this.state;
      if (choosen === quiz[currentQuestionNum].correctAnswer)
        this.setState({ isCorrect: true, choosen });
      else {
        this.setState({ isCorrect: false, choosen }, () =>
          console.log(this.state),
        );
      }
    }
  };

  choiceOption = () => {};

  render() {
    const {
      quiz,
      currentQuestionNum,
      shuffled,
      isCorrect,
      choosen,
    } = this.state;
    const currentQuestion = quiz[currentQuestionNum];

    if (!shuffled) return '';
    return (
      <div>
        <h3 className="question">{currentQuestion.text}</h3>
        {shuffled.map((s, i) => {
          let correct = null;
          let incorrect = null;
          if (isCorrect) correct = s === choosen ? 'green' : null;
          else if (isCorrect === false) {
            correct = s === currentQuestion.correctAnswer ? 'green' : null;
            incorrect = s === choosen ? 'red' : null;
            console.log(correct, incorrect);
          }
          console.log(correct, incorrect);
          return (
            <Choice
              key={i}
              choice={s}
              index={i}
              correct={correct}
              incorrect={incorrect}
              selectedAnswer={this.selectedAnswer}
            />
          );
        })}
      </div>
    );
  }
}

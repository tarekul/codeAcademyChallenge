import React, { Component } from 'react';

import { shuffleChoices } from '../../utilities';

import Choice from '../choice/choice.component';

class DisplayTextAndChoices extends Component {
  state = {
    shuffledChoices: [],
    answer: null,
    isCorrect: null,
    id: 0,
  };

  componentDidMount() {
    this.shuffle();
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.currentQuestionIdx) {
      this.setState({
        id: this.props.currentQuestionIdx,
        shuffleChoices: [],
        answer: null,
        isCorrect: null,
      });
      this.shuffle();
    }
  }

  shuffle = () => {
    const { quiz, currentQuestionIdx } = this.props;
    const question = quiz[currentQuestionIdx];
    const choices = [question.correctAnswer, ...question.incorrectAnswers];

    const shuffledChoices = shuffleChoices(choices);
    this.setState({ shuffledChoices: shuffledChoices });
  };

  selectChoiceColor = s => {
    const { quiz, currentQuestionIdx } = this.props;
    const { answer, isCorrect } = this.state;
    if (answer) {
      const question = quiz[currentQuestionIdx];

      let color = '';
      if (isCorrect && s === answer) color = 'green';
      else if (isCorrect === false) {
        if (s === answer) color = 'red';
        else if (s === question.correctAnswer) color = 'green';
      }

      return color;
    }
  };

  showResult = () => {
    const { isCorrect } = this.state;
    if (isCorrect === null) return '';
    else if (isCorrect === true) return 'Correct!';
    else return 'Incorrect...';
  };

  setAnswer = ans => {
    const {
      quiz,
      currentQuestionIdx,
      incrementNumCorrect,
      toggleIsButtonActive,
      addUserAnswersToList,
    } = this.props;
    const question = quiz[currentQuestionIdx];

    addUserAnswersToList(ans);
    toggleIsButtonActive();

    if (ans === question.correctAnswer) {
      incrementNumCorrect();
      this.setState({ isCorrect: true, answer: ans });
    } else this.setState({ isCorrect: false, answer: ans });
  };

  render() {
    const { quiz, currentQuestionIdx } = this.props;
    const { shuffledChoices, answer } = this.state;

    const question = quiz[currentQuestionIdx];

    return (
      <div>
        <h3 className="question">{question.text}</h3>
        {shuffledChoices.map((s, i) => {
          const color = this.selectChoiceColor(s);
          return (
            <Choice
              key={Math.random() * 9}
              choice={s}
              index={i}
              color={color}
              answer={answer}
              setAnswer={this.setAnswer}
            />
          );
        })}
        <p className="result">{this.showResult()}</p>
      </div>
    );
  }
}

export default DisplayTextAndChoices;

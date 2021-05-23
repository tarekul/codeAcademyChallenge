import React, { Component } from 'react';

import { connect } from 'react-redux';

import { incrementNumberCorrect } from '../../redux/quiz/quiz.actions';
import { setAnswerSelection } from '../../redux/question/question.actions';

import Choice from '../choice/choice.component';

class DisplayTextAndChoices extends Component {
  selectChoiceColor = s => {
    const { quiz, currentQuestionIdx, answer } = this.props;
    if (answer) {
      const question = quiz[currentQuestionIdx];
      const isCorrect = answer === question.correctAnswer ? true : false;

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
    const {
      quiz,
      currentQuestionIdx,
      answer,
      incrementNumberCorrect,
    } = this.props;
    const question = quiz[currentQuestionIdx];
    if (answer === null) return '';
    if (answer && answer === question.correctAnswer) {
      incrementNumberCorrect();
      return 'Correct!';
    } else if (answer !== question.correctAnswer) return 'Incorrect...';
  };

  render() {
    const { quiz, currentQuestionIdx, shuffledChoices } = this.props;
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
              setAnswer={this.setAnswer}
            />
          );
        })}
        <p className="result">{this.showResult()}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentQuestionIdx: state.quiz.currentQuestionIdx,
  shuffledChoices: state.quiz.shuffledChoices,
  answer: state.question.answer,
});

const mapDispatchToProps = dispatch => ({
  setAnswerSelection: a => dispatch(setAnswerSelection(a)),
  incrementNumberCorrect: () => dispatch(incrementNumberCorrect()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayTextAndChoices);

import React from 'react';
import './quiz.styles.css';

import { connect } from 'react-redux';

import {
  incrementCurrentQuestionIdx,
  shuffleAndSetChoices,
  setTotalQuestions,
} from '../../redux/quiz/quiz.actions';

import { resetAnswerSelection } from '../../redux/question/question.actions';

//components
import NextButton from '../nextButton/nextQuestionButton.component';
import DisplayTextAndChoices from '../displayTextAndChoices/displayTextAndChoices.component';
import Summary from '../summary/summary.component';

class Quiz extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    this.setTotalQuestionsAndShuffleChoices();
  }

  componentDidUpdate() {
    const { currentQuestionIdx } = this.props;

    if (this.state.index !== currentQuestionIdx) {
      this.setState({ index: currentQuestionIdx });
      this.setTotalQuestionsAndShuffleChoices();
    }
  }

  setTotalQuestionsAndShuffleChoices = () => {
    const {
      quiz,
      currentQuestionIdx,
      shuffleAndSetChoices,
      setTotalQuestions,
      resetAnswerSelection,
    } = this.props;
    const question = quiz[currentQuestionIdx];
    resetAnswerSelection();
    setTotalQuestions(quiz.length);

    shuffleAndSetChoices(question.correctAnswer, question.incorrectAnswers);
  };

  render() {
    const { quiz, showSummary } = this.props;

    if (!showSummary) {
      return (
        <>
          <DisplayTextAndChoices quiz={quiz} />
          <NextButton quiz={quiz} />
        </>
      );
    }
    return <Summary />;
  }
}

const mapStateToProps = state => ({
  currentQuestionIdx: state.quiz.currentQuestionIdx,
  showSummary: state.quiz.showSummary,
  shuffledChoices: state.quiz.shuffledChoices,
});

const mapDispatchToProps = dispatch => ({
  setTotalQuestions: num => {
    dispatch(setTotalQuestions(num));
  },
  incrementCurrentQuestionIdx: () => {
    dispatch(incrementCurrentQuestionIdx());
  },
  shuffleAndSetChoices: (correctAnswer, incorrectAnswers) => {
    dispatch(shuffleAndSetChoices(correctAnswer, incorrectAnswers));
  },
  resetAnswerSelection: () => {
    dispatch(resetAnswerSelection());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

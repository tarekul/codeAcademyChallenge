import React from 'react';
import './quiz.styles.css';

//components
import NextButton from '../nextButton/nextQuestionButton.component';
import DisplayTextAndChoices from '../displayTextAndChoices/displayTextAndChoices.component';
import SummaryContainer from '../summaryContainer/summaryContainer.component';

class Quiz extends React.Component {
  state = {
    index: 0,
    currentQuestionIdx: 0,
    numCorrect: 0,
    totalQuestions: this.props.quiz.length,
    showSummary: false,
    isButtonActive: false,
    userAnswers: [],
  };

  componentDidUpdate() {
    if (this.state.index !== this.props.currentQuizIdx) {
      this.setState({
        index: this.props.currentQuizIdx,
        currentQuestionIdx: 0,
        numCorrect: 0,
        totalQuestions: this.props.quiz.length,
        showSummary: false,
        isButtonActive: false,
        userAnswers: [],
      });
    }
  }

  addUserAnswersToList = ans => {
    const { userAnswers } = this.state;
    userAnswers.push(ans);
    this.setState({ userAnswers });
  };

  incrementNumCorrect = () => {
    this.setState({ numCorrect: this.state.numCorrect + 1 });
  };

  nextQuestion = () => {
    const { currentQuestionIdx, totalQuestions } = this.state;
    const { toggleNextQuizButton } = this.props;
    if (currentQuestionIdx < totalQuestions - 1) {
      this.setState({ currentQuestionIdx: currentQuestionIdx + 1 });
      this.toggleIsButtonActive();
    } else {
      toggleNextQuizButton();
      this.setState({ showSummary: true });
    }
  };

  toggleIsButtonActive = () => {
    this.setState({ isButtonActive: !this.state.isButtonActive });
  };

  render() {
    const { quiz } = this.props;
    const {
      currentQuestionIdx,
      numCorrect,
      showSummary,
      isButtonActive,
      userAnswers,
    } = this.state;

    if (!showSummary) {
      return (
        <>
          <DisplayTextAndChoices
            quiz={quiz}
            currentQuestionIdx={currentQuestionIdx}
            incrementNumCorrect={this.incrementNumCorrect}
            toggleIsButtonActive={this.toggleIsButtonActive}
            addUserAnswersToList={this.addUserAnswersToList}
          />
          <NextButton
            isButtonActive={isButtonActive}
            nextQuestion={this.nextQuestion}
          />
        </>
      );
    } else {
      return (
        <SummaryContainer
          numCorrect={numCorrect}
          totalQuestions={quiz.length}
          quiz={quiz}
          userAnswers={userAnswers}
        />
      );
    }
  }
}

export default Quiz;

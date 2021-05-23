import React from 'react';

import quizzes from './data/quizzes';

//components
import Title from './components/title/title.component.jsx';
import Quiz from './components/quiz/quiz.component.jsx';
import NextQuizButton from './components/nextButton/nextQuizButton.component';

class App extends React.Component {
  state = {
    currentQuizIdx: 0,
    totalQuizzes: quizzes.length,
    showNextQuizButton: false,
  };

  nextQuiz = () => {
    const { currentQuizIdx, totalQuizzes } = this.state;
    if (currentQuizIdx < totalQuizzes - 1)
      this.setState({
        currentQuizIdx: currentQuizIdx + 1,
        showNextQuizButton: false,
      });
  };

  toggleNextQuizButton = () => {
    this.setState({ showNextQuizButton: true });
  };

  render() {
    const { currentQuizIdx, showNextQuizButton } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <Title quiz={quizzes[currentQuizIdx].title} />
        <Quiz
          quiz={quizzes[currentQuizIdx].questions}
          currentQuizIdx={currentQuizIdx}
          toggleNextQuizButton={this.toggleNextQuizButton}
        />
        {showNextQuizButton ? <NextQuizButton nextQuiz={this.nextQuiz} /> : ''}
      </div>
    );
  }
}

export default App;

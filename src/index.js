import React from 'react';
import ReactDOM from 'react-dom';

import quizzes from './data/quizzes';

//components
import Title from './components/title/title.component.jsx';
import Quiz from './components/quiz/quiz.component.jsx';

import './styles.css';

class App extends React.Component {
  state = {
    complete: false,
    currentQuiz: 0,
    totalQuizes: quizzes.length,
  };

  isComplete = () => this.setState({ complete: true });

  render() {
    const { currentQuiz } = this.state;

    return (
      <div>
        <Title currentQuiz={quizzes[currentQuiz].title} />
        <Quiz
          quiz={quizzes[currentQuiz].questions}
          isComplete={this.isComplete}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

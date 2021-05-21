import React from 'react';

import { connect } from 'react-redux';

import quizzes from './data/quizzes';

import {
  setTotalNumOfQuizzes,
  incrementQuiz,
} from './redux/quizzes/quizzes.actions';

//components
import Title from './components/title/title.component.jsx';
import Quiz from './components/quiz/quiz.component.jsx';

class App extends React.Component {
  componentDidMount() {
    this.props.setTotalNumOfQuiz(quizzes.length);
  }

  render() {
    const { currentQuiz } = this.props;

    return (
      <div style={{ textAlign: 'center' }}>
        <Title quiz={quizzes[currentQuiz].title} />
        <Quiz quiz={quizzes[currentQuiz].questions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentQuiz: state.quizzes.currentQuiz,
});

const mapDispatchToProps = dispatch => ({
  setTotalNumOfQuiz: num => {
    dispatch(setTotalNumOfQuizzes(num));
  },
  incrementQuiz: num => {
    dispatch(incrementQuiz(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

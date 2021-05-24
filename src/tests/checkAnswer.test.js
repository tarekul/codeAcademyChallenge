//run npm test on terminal to run the tests

/*
checkAnswer function takes three arguments: answer,correctAnswer, and a callback
if answer is correct callback is called and function returns an object
{isCorrect:true, answer}
else the function just returns {isCorrect:false, answer}

In this test I recreated the React component method incrementNumCorrect
below to test if state updates numCorrect to 1 after answer is correct.
*/
import { checkAnswer } from '../utilities';

const state = {
  numCorrect: 0,
  answer: null,
  isCorrect: null,
};

const incrementNumCorrect = () => {
  state.numCorrect = state.numCorrect + 1;
};

test('testing user selecting the CORRECT answer', () => {
  expect(checkAnswer('br', 'br', incrementNumCorrect)).toEqual({
    isCorrect: true,
    answer: 'br',
  });
  expect(state.numCorrect).toEqual(1);
});

test('testing user selecting the INCORRECT answer', () => {
  expect(
    checkAnswer(
      "<link href='/cats' />",
      "<a href='/cats' />",
      incrementNumCorrect,
    ),
  ).toEqual({ isCorrect: false, answer: "<link href='/cats' />" });
});

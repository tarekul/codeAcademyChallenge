export const shuffleChoices = arr => {
  return arr
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
};

export const checkAnswer = (answer, correctAnswer, cb) => {
  if (answer === correctAnswer) {
    cb();
    return { isCorrect: true, answer };
  } else return { isCorrect: false, answer };
};

import React from 'react';

import Summary from '../summary/summary.component';
import TableOfResults from '../delighter/tableOfResults.component';

export default function SummaryContainer({
  numCorrect,
  totalQuestions,
  quiz,
  userAnswers,
}) {
  return (
    <div>
      <Summary numCorrect={numCorrect} totalQuestions={totalQuestions} />
      <TableOfResults quiz={quiz} userAnswers={userAnswers} />
    </div>
  );
}

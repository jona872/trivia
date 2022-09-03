import React from 'react';

import './Trivia.css';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import triviaData from './triviaData';

function Trivia(props) {
// const [trivia, setTrivia] = React.useState({
//   question: props.value,
//   correct_answer: props.correct_answer,
//   isCorrect: false,
//   answers: props.answers
// });
// console.log(props);
  return (
    <div className="box">
      <div className="trivia--container">
        <Question value={props.question} />
        <Answer value={props.answers} />
        <hr />
      </div>
    </div>
  );
}

export default Trivia;
import React from 'react';

import './Trivia.css';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import triviaData from './triviaData';

function Trivia(props) {
  // const [trivia, setTrivia] = React.useState({
  //   question: props.question,
  //   correct_answer: props.correct_answer,
  //   isCorrect: false,
  //   answers: props.answers
  // });

  const [arrayNumbers, setArrayNumbers] = React.useState(initialSetup());

  function initialSetup() {
    let resu = [];
    for (let i = 0; i < Object.keys(props.answers).length; i++) {
      resu.push(
        {
          key: i, id: i,
          value: props.answers[i],
          isHeld: false
        });
    }
    return resu;
  }

  console.log(arrayNumbers);

  // const vAnsers = arrayNumbers.map((data) => {
  //   console.log(data);
  // }

  // );

  // console.log(props);
  return (
    <div className="box">
      <div className="trivia--container">
        <Question value={props.question} />
        {/* <Answer value={props.answers} /> */}
        <hr />
      </div>
    </div>
  );
}

export default Trivia;
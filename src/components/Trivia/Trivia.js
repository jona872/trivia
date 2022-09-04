import React, { useState } from 'react';

import './Trivia.css';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
// import triviaData from './triviaData';

function Trivia(props) {
  console.log(props);
  
  const [arrayNumbers, setArrayNumbers] = React.useState(initialSetup()); //Answers
  const [question, setQuestion] = React.useState(props.question);    
  const [correctAnswer, setCorrectAnswer] = React.useState(props.correct_answer);
    
  function initialSetup() {
    let resu = [];
    for (let i = 0; i < Object.keys(props.answers).length; i++) {      
      resu.push(
        {
          key: i, id: i,
          value: props.answers[i],
          isHeld: false,
          isCorrect: false
        });
    }
    return resu;
  }


  function toogler(id) {   
    setArrayNumbers(prevState => prevState.map(answer => {     
      return (answer.id === id) ?
        {
          ...answer,
          isHeld: !answer.isHeld,
          isCorrect: (correctAnswer === answer.value) ? true : false
        }
        :
        answer
    }))    
  }

  const vAnsers = arrayNumbers.map((data) => {
    return <Answer key={data.id} id={data.id}
      holded={data.isHeld}  
      value={data.value}
      handleClick={() => toogler(data.id)} />
  }

  );

  return (
    <div className="box">
      <div className="trivia--container">

        <Question value={props.question} />

        <div className="answer--container">
          {vAnsers}
        </div>            
        
        <hr />

      </div>
    </div>
  );
}

export default Trivia;
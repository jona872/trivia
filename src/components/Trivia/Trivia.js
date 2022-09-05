import React from 'react';
import './Trivia.css';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

function Trivia(props) {

  const [arrayNumbers, setArrayNumbers] = React.useState(initialSetup()); //Answers

  function initialSetup() {
    let resu = [];
    for (let i = 0; i < Object.keys(props.answers).length; i++) {
      resu.push(
        {
          key: i, id: i,
          value: props.answers[i],
          isHeld: false,
          isCorrect: props.is_correct
        }
      );
    }
    return resu;
  }


  function toogler(id) {   
    setArrayNumbers(prevState => prevState.map(answer => {            
      return (answer.id === id) ?
        {
          ...answer,
          isHeld: !answer.isHeld,
          is_correct: (props.correct_answer === answer.value) ? true : false
        }
        :
        answer
    }))
  }

  const vAnsers = arrayNumbers.map((data) => {
    // console.log(data);
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
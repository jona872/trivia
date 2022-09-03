import React from 'react';
import './Page2.css';
import Trivia from '../Trivia/Trivia';
import triviaData from './triviaData';

function Page2() {
  const [trivias,setTrivias] = React.useState(triviaData);

  function show() {
    triviaData.results.map( data => {
      let allAnswers = data.incorrect_answers;
      if (!allAnswers.includes(data.correct_answer)) {
        // ✅ only runs if value not in array
        allAnswers.push(data.correct_answer);
      }
      const shuffledArray = allAnswers.sort((a, b) => 0.5 - Math.random());

      console.log("Question: ", data.question);
      console.log("Answers: ", shuffledArray);
      console.log("Correct Answer: ", data.correct_answer);
      console.log("----------------------------------------");
    });
  }

  // console.log(triviaData.results);
  
  const vTrivia = triviaData.results.map( (data) => {
    let allAnswers = data.incorrect_answers;
      if (!allAnswers.includes(data.correct_answer)) {
        allAnswers.push(data.correct_answer);
      }
      const shuffledArray = allAnswers.sort((a, b) => 0.5 - Math.random());
      // console.log(shuffledArray);
      
    return <Trivia question={data.question} answers={shuffledArray}  />
    
  });



  return (
    <div className="page2--container">
      {/* <Trivia question="hola"/> */}
      {vTrivia}

      <button className="trivia--button">Check answers</button>
    </div>
  );
}

export default Page2;
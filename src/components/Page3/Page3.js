import React, { useState } from 'react';
import Trivia from '../Trivia/Trivia';
import triviaData from './triviaData';
import TriviaRow from '../TriviaRow/TriviaRow';
import './Page3.css';
import { nanoid } from 'nanoid'

function Page3() {
  const [arrayTrivia, setArrayTrivia] = React.useState(initialSetup());

  function smartShaffle(x, y) {
    let shuffledArray = x.concat(y)
    shuffledArray = shuffledArray.sort((a, b) => 0.5 - Math.random());
    shuffledArray = shuffledArray.filter((item, index) => {
      return shuffledArray.indexOf(item) === index;
    })
    return shuffledArray;
  }

  function initialSetup() {
    let initialState = [];
    for (let i = 0; i < triviaData.results.length; i++) {
      const element = triviaData.results[i];
      const shuffledArray = smartShaffle(element.incorrect_answers,
        element.correct_answer);
      initialState.push(
        {
          key: i, id: i,
          question: element.question,
          answers: shuffledArray,
          answered: "",
          correct_answer: element.correct_answer,
          point: 0, // a way to handle points/correct answers
        }


      );
    }// del for
    return initialState;
  }
  function handleClick(id, copy) {
    console.log(id,copy);
    setArrayTrivia(prevState => prevState.map(trivia => {
      
      if (trivia.id === id) {
        return (trivia.correct_answer === copy) ?
        {
          ...trivia,
          question: "Se sumo 1",
          answered: copy,
          point: 1
        } : 
        {
          ...trivia,
          question: "No sumo nada",
          answered: copy,
          point: 0
        }
        
      }
   }))
    
  }

  function changer(origin,copy) {
    origin = copy;
  }

  const vTrivia = arrayTrivia.map((trivia) => {
  
    return <TriviaRow key={nanoid()} id={trivia.id} data={trivia} 
          answer={trivia.answered}
          changeAnswer={changer(trivia.answered,copy)}
          handleClick={ () => handleClick(trivia.id)} />
  });

  return (
    <div>
      {vTrivia}
    </div>
  );
}

export default Page3;
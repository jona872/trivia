import React from 'react';
import './Page2.css';
import Trivia from '../Trivia/Trivia';
import triviaData from './triviaData';
import { nanoid } from 'nanoid'

function Page2() {
  const [trivias, setTrivias] = React.useState(triviaData);
  const [game, setGame] = React.useState([]);

  let vGame = [];

  const vTrivia = triviaData.results.map((data) => {
    let allAnswers = data.incorrect_answers;
    if (!allAnswers.includes(data.correct_answer)) {
      allAnswers.push(data.correct_answer);
    }
    const shuffledArray = allAnswers.sort((a, b) => 0.5 - Math.random());

    let triviaRow = {
      id: nanoid(),
      question: data.question,
      answers: shuffledArray,
      correct_answer: data.correct_answer,
      patherCorrect: false
    }
    vGame.push(triviaRow);

    return <Trivia key={nanoid()} question={data.question}
      answers={shuffledArray}
      correct_answer={data.correct_answer}
      is_correct={data.patherCorrect}
      />
  });

  function submit() {
    console.log("asd");
    console.log(vGame);
  }

  return (
    <div className="page2--container">
      {vTrivia}
      <button className="trivia--button" onClick={submit} >Check answers</button>
    </div>
  );
}

export default Page2;
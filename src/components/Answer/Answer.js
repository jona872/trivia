import './Answer.css';
import React from 'react';

function Answer(props) {
  // const [answers, setAnswers] = React.useState({
  //   id: 0,
  //   answer: props.value,
  //   isHeld: false
  // });

//   function handleClick() {
//     setAnswers(prevState => {
//       return {
//         ...prevState,
//         isHeld: !prevState.isHeld
//       }
//       } 
//     )
// }

// const vAnswers = props.value.map((item) => {
//   return <button
//     className="answer--button"
//     onClick={handleClick}
//   >
//     {item}
//   </button>
// });

return (
  <div className="answer--container">
    <button className="answer--button" id={props.id} isHeld={props.isHeld} > {props.value}  </button>
  </div>
);
}

export default Answer;
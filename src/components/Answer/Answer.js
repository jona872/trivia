import './Answer.css';
import React from 'react';

function Answer(props) {
  const styles = {
    backgroundColor: props.holded ? "#D6DBF5" : "#F5F7FB"
  }

  return (

    <button style={styles} 
      className="answer--button"
      id={props.id}
      holded={props.holded.toString()} 
      onClick={props.handleClick} >
      {props.value}
    </button>
  );
}

export default Answer;
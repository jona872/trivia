import './Question.css';

function Question(props) {
  return (
    <div className="question--container">
      {props.value}
    </div>
  );
}

export default Question;
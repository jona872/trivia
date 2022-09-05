import './TriviaRow.css';
import { nanoid } from 'nanoid'

function TriviaRow(props) {
    // console.log(props.data.answers);

    function setter(copy) {
        props.answer = copy;
        
        console.log(props.answered);
    }

    const vAnswers = props.data.answers.map((copy, id) => {
        // console.log("BOTON: ");
        // console.log(id);
        // console.log(copy);
        return <li> 
            <button
                key={nanoid()}
                onClick={() => setter(copy)}> {id + copy}  </button>
            </li>
    }

    );


    return (
        <div className="TriviaRow--container">
            <h1>
                hola {props.data.question}
            </h1>
            <ul>
                {vAnswers}
            </ul>

            <h2> Respondida: {props.data.answered}</h2>

            <h3> puntos de esta trivia: {props.data.point}</h3>

            <button onClick={props.handleClick}> click</button>
        </div>
    );
}

export default TriviaRow;
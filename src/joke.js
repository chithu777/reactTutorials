import React from 'react';
function Joke(probs){
    return (
        <div className="jokes">
            <div className="question" style={(probs.quesion)?{display:'block'}:{display:'none'}}>{probs.quesion}</div>
            <div className="answer">{probs.answer}</div>
        </div>
    )
}
export default Joke

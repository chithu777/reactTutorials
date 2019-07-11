import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './joke'
const App =() =>  {
  return(
    <div className="container"> 
      <Joke quesion="question1" answer="answer1" />
      <Joke  answer="answer2" />
      <Joke quesion="question3" answer="answer3" />
      <Joke  answer="answer4" />
      <Joke quesion="question5" answer="answer5" /> 
    </div>
  )
}

export default App;
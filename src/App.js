import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './joke';
import productsData from './productsData';
const productsDatas = productsData.map(datas => {console.log(datas.question);
  return <Joke key={datas.id} quesion = {datas.question} answer={datas.answer} />
});
const App =() =>  {
  return(
    <div className="container"> 
      {productsDatas}
    </div>
  )
}

export default App;
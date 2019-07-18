import React,{Component} from 'react';
import {productsData} from './productsData'
import TodoItem from './TodoItem';
class App extends Component{

  constructor(){
    super();
    const ProductsData = productsData.map((data, index)=>{
      return <TodoItem key={index} answer={data.answer} checkes={false} />
    });
    this.state = {"ProductsData":ProductsData}
  }
  changeContent(){
    this.setState()
  }
  render(){

    return (
      <div>
        <button onClick={this.changeContent()}>Click Me</button>
        {this.state.ProductsData}
      </div>
    )
  }
}

export default App


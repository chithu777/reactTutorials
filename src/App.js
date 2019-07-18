import React,{Component} from 'react';
import {productsData} from './productsData'
import TodoItem from './TodoItem';
class App extends Component{

  constructor(){
    super();
    const ProductsData = productsData.map((data)=>{
      return <TodoItem answer={data.answer} />
    });
    this.state = {"ProductsData":ProductsData}
  }
  render(){

    return (
      <div>
        {this.state.ProductsData}
      </div>
    )
  }
}

export default App


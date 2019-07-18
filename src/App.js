import React,{Component} from 'react';
import {productsData} from './productsData'
import TodoItem from './TodoItem';
class App extends Component{

  constructor(){
    super();
    const ProductsData = productsData.map((data, index)=>{
      return <TodoItem key={index} answer={data.answer} checkes={false} />
    });
    this.state = {"ProductsData":ProductsData,clickCount:0}
    this.changeCount = this.changeCount.bind(this)
  }
  changeCount(){
    this.setState({clickCount:1})
  }
  render(){

    return (
      <div>
        <button onClick={this.changeCount}>Change</button>
        <p>{this.state.clickCount}</p>
        {this.state.ProductsData}
      </div>
    )
  }
}

export default App


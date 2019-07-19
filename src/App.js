import React from 'react';
import TodoItem from './TodoItem';
import {productsData} from './productsData';
class App extends React.Component{
  constructor(){
    super();
    this.state={count:1}
    this.updateCount=this.updateCount.bind(this);
  }
  updateCount(){
    this.setState((prevState)=>{
      return {count: prevState.count+1}
    })
  }
  render(){
    const products =productsData.map((data,index)=>{
      return <TodoItem key={index} data={data} />
    });
    return(
      <div>
        <button onClick={this.updateCount}>Change</button>
        <p>{this.state.count}</p>
        {products}
      </div>
    )
  }
}
export default App
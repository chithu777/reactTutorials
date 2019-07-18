import React from 'react';
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
    return(
      <div>
        <button onClick={this.updateCount}>Change</button>
        <p>{this.state.count}</p>
        
      </div>
    )
  }
}
export default App
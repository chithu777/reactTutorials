import React,{Component} from 'react';

class App extends Component{

  constructor(){
    super();
    this.state = {boolVals:false}
  }
  render(){

    return (
      <div>
        you are currently logged {this.state.boolVals ? ('in'): ("Out")}
      </div>
    )
  }
}

export default App


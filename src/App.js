import React from 'react';


class App extends React.Component{
    method(){
      return "true"
    }
    render(){
      return(
        <div>
          <h1>{this.method()} is {this.props.propvals}</h1>
        </div>
      )
    }
}

export default App


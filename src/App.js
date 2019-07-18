import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component{
    method(){
      //this.setState({inputvalue:"New Chithu"});
    }
    constructor(){
      super()
      this.state= {name:"Chithu",age:"12"}
    }
    render(){
      return(
        <div>
          <Header username="Chithu" />
            <h1>Name is {this.state.name} and Age is {this.state.age}</h1> <button onClick = {this.method()} >ChangeValue</button>
          <Footer/>
        </div>
      )
    }
}

export default App


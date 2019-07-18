import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component{
    method(){
      return "true"
    }
    render(){
      return(
        <div>
          <Header username="Chithu" />
            <h1>{this.method()} is {this.props.propvals}</h1>
          <Footer/>
        </div>
      )
    }
}

export default App


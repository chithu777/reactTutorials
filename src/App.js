import React,{Component} from 'react';
import './App.css';
import TodoItem from './TodoItem';
import {productsData} from './productsData';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      name:'vikram',
    }
  }

  
  componentDidMount() {
    console.log("mydata----->",productsData);
  }

  renderItems=()=>{
    return productsData.map((value,key)=>{
      return <TodoItem key={key} answer={value.answer}/>
    })
  }



  render(){
    
    return(
        <div>
          {this.renderItems()}
        </div>
    );
  }
} 
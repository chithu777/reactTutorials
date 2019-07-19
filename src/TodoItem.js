import React from 'react';


class TodoItem extends React.Component{
    constructor(){
        super();
        const style = { color: "red",background:'pink'}
        const style2 = { color: "red",background:'pink'}
        const style3 = { color: "red"}
    }
    checkboxChange(id){
        console.log(id);
    }
    render(){
        return(
            <div style={this.style3}>
                <input type="checkbox" checked={this.props.data.completed}  onChange={this.checkboxChange(this.props.data.id)}></input>
                <p style={this.style}>{this.props.data.answer}</p>
            </div>
        )
    }
}
export default TodoItem
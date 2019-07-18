import React from 'react';


class TodoItem extends React.Component{
    constructor(){
        super();
        const style = { color: "red",background:'pink'}
        const style2 = { color: "red",background:'pink'}
        const style3 = { color: "red"}
    }
    render(){
        return(
            <div style={this.style3}>
    
                <input type="checkbox" defaultChecked={this.props.checkes}></input>
                <p style={this.style}>{this.props.answer}</p>
            </div>
        )
    }
}
export default TodoItem

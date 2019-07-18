import React from 'react';

function TodoItem(props){
    const style = { color: "red",background:'pink'}
    const style2 = { color: "red",background:'pink'}
    const style3 = { color: "red"}
    return(
        <div style={style3}>
            <p style={style}>{props.answer}</p>
        </div>
    )
}
export default TodoItem

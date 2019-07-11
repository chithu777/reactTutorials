import React from 'react';
function TodoItem(){
    const style = { color: "red",background:'pink'}
    const style2 = { color: "red",background:'pink'}
    const style3 = { color: "red"}
    return(
        <div style={style3}>
            <input type="checkbox" style={style2}/>
            <p style={style}>TO do item 1</p>
        </div>
    )
}
export default TodoItem

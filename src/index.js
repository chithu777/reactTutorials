import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function MyInfo(){
    return(
        <div>
            <h1>Chithambaram</h1>
            <p>Hi hello How are u</p>
            <ul>
                <li>place1</li>
                <li>place2</li>
                <li>place3</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<MyInfo/>,document.getElementById("root"));
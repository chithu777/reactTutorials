import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <header className="navBars">
                <h1>Welcome, {this.props.username}!</h1>
             </header>
        )
    }
}
export default Header
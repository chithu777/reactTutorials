import React from 'react';
class Footer extends React.Component{

    greeting(){
        const date = new Date()
        const hours = date.getHours()
        return hours
    }
    render(){
        return(
            <footer>
                This is the end of the content Footer{this.greeting()}
            </footer>
        )
    }
}
export default Footer
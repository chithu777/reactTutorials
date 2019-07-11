import React from 'react';
function Main(){
    const date =new Date(2018, 4, 4, 23);
    const hours = date.getHours();
    let myday;
    const styles = {color:'red',fontSize:14};
    if(hours < 12){
        myday = "morning"
        styles.color = "red"
    }else if(hours >12 && hours < 17)
    {
        myday = "afternoon"
        styles.color = "green"
    }else if(hours >17 && hours < 19)
    {
        myday = "evening"
        styles.color = "yellow"
    }else{
        myday = "night"
        styles.color = "blue"
    }
    return (
        <main>
            <p style={styles}>Now!! {myday}</p>
        </main>
    )
}
export default Main
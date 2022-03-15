import React, { useState } from "react";

const App = () =>{
    let time = new Date().toLocaleTimeString();
    const [ctime, uptime] = useState(time);
    
    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        uptime(time)
    }
    setInterval(updateTime, 1000);
    return(
        <h1>{ctime}</h1>
    )
}

export default App;
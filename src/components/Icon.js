import React, { useState } from 'react';


// props คือการส่งจาก components หนึ่งไปยังอีก components

const Icon = props => {
    let count = 0;
    let handleClick = () => {
        count = count + 1;
        console.log(count);
    }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={handleClick}>add</button>
        </div>
    )

}


export default Icon;
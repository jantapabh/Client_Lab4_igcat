import React, { useState } from 'react';


// props คือการส่งจาก components หนึ่งไปยังอีก components

const Icon = props => {

    let [count, setCount] = useState(1);

    // let handleClick = () => {
    //     count = count + 1;
    //     console.log(count);
    // }

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count+1)}>add</button>
        </div>
    )

}


export default Icon;
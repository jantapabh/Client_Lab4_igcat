import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';


function App() {

  let [counts, setCounts] = useState([0,0,0]);
  
  // let handleClick = () => {

  //   setCount(count + 1)

  // }

  //ถ้าต้องการส่ง handleClick ไปยัง icon ได้

  return (
    <div className="App">
    {

      counts.map((count,index) => {

        return  <Icon key={index} count={count} />

      }) 
    }
     {/* {
       [
         <Icon counts={counts[0]} />,
         <Icon counts={counts[1]} />,
         <Icon counts={counts[2]} />
       ]
     } */}
    </div>
  );
}

export default App;

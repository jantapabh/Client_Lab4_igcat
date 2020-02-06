import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';


function App() {

  let [count, setCount] = useState(0);
  let handleClick = () => {

   setCount(count+1)

  }

  //ถ้าต้องการส่ง handleClick ไปยัง icon ได้

  return (
    <div className="App">
      <Icon count={handleClick}/>
    </div>
  );
}

export default App;

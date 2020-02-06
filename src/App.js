import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';


function App() {

  let [count, setCount] = useState(0);
  let handleClick = () => {

   setCount(count+1)

  }

  return (
    <div className="App">
      <Icon count={handleClick}/>
    </div>
  );
}

export default App;

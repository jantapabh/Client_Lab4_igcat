import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';


function App() {

  let x = 0;
  return (
    <div className="App">
      <Icon value={x} value2={10} />
    </div>
  );
}

export default App;

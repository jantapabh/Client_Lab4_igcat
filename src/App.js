import React, { useState, useEffect } from 'react';
import './App.css';
import Icon from './components/Icon';
import axios from 'axios';



const url = 'http://api.openweathermap.org/data/2.5/weather?q=83000,th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e';

let [temp, setTemp] = useState(0)
let [humi, setHumi] = useState(0)



function App() {

  const getWeather = async () => {

    let {data} = await axios.get(url);

    setTemp(data.main.temp);
    setHumi(data.main.humi);

  }

  useEffect(() => {
    getWeather()

  }, []);




  return (


    <div className="App">
    <Icon />
    <div>Tem : {temp}</div>


    </div>
  );
}

export default App;

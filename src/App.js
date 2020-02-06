import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon';
import axios from 'axios';

// axios เป็น module mี่ใช้ในการ เet api


// const fetchData = async () => {

 
//   const fetchData = await axios.get(URL);
//   const respone =  await fetchData.json();

//   console.log(respone);

// } 

function App() {


  const getWeather = async () => {

   await  axios.get(url);

  }

  const url ='http://api.openweathermap.org/data/2.5/weather?q=83000,th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e';


   useEffect(() => {

   getWeather()

    
   }, []);



  // let [counts, setCounts] = useState([0,0,0]);
  
  // let handleClick = (index) => {

  //  // edit word
  //   counts[index]++;


  //   //update state
  //   setCounts([...counts])

  // }

  // //ถ้าต้องการส่ง handleClick ไปยัง icon ได้

  return (
    <div className="App">
        
     <Icon />

    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Img from './Img';
import Info from './Info';
import "./App.css";

function App() {

  const [ photoData, setPhotoData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {setPhotoData(res.data)})
    .catch(err => console.error(err))

  },[])
 

  return (
    <div className="App">
      <div className="App-header"></div>
      <img src={photoData.url} alt="a daily astronomy photo" />
      
    </div>
  );
}

export default App;

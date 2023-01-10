import React, { useState, useEffect } from "react";
import axios from 'axios';
import Img from './Img';
import Info from './Info';
import Header from './Header';
import "./App.css";

function App() {

  const [ photoData, setPhotoData] = useState({});

  const mainHead = "NASA Astronomy Photo of the Day";

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {setPhotoData(res.data)})
    .catch(err => console.error(err))

  },[])
 

  return (
    <div className="App">
      < Header mainHead={mainHead}/>
      <div className="App-container">        
      <Img className="hero" source={photoData.url} alt="a daily astronomy photo" />
      <Info className="info" date={photoData.date} desc={photoData.explanation} copyright={photoData.copyright}
        title={photoData.title}/>
      </div>
      
      
    </div>
  );
}

export default App;

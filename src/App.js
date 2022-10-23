/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React from 'react';
import Header from './Component/Header';
import Slider from './Component/Slider';
import AboutMe from './Component/AboutMe';
import Education from './Component/Education';
function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <AboutMe/>
      <Education/>
    </div>
  );
}

export default App;

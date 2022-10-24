/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React from 'react';
import Header from './Component/Header';
import Slider from './Component/Slider';
import AboutMe from './Component/AboutMe';
import Education from './Component/Education';
import Experience from './Component/Experience';
function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <AboutMe/>
      <Education/>
      <Experience/>
    </div>
  );
}

export default App;

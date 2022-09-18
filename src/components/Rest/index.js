import React from 'react';
import About from '../About';
import Home from '../Home';
import Skills from '../Skills';
import './style.css';

export default function Rest() {
  return (
    <div id='rest-container'>
      <Home />
      <About />
      <Skills />
    </div>
  );
}

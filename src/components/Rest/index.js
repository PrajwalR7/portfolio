import React from 'react';
import About from '../About';
import Contact from '../Contact';
import EdEx from '../EdEx';
import Footer from '../Footer';
import Home from '../Home';
import Project from '../Project';
import Skills from '../Skills';
import './style.css';

export default function Rest() {
  return (
    <div id='rest-container'>
      <Home />
      <About />
      <EdEx />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

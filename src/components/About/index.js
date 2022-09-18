import React from 'react';
import './style.css';
import profile from '../../resources/profile1.jpg';
export default function About() {
  return (
    <div id='about-container'>
      <div id='about-header'>
        <h2>About</h2>
        <p>My introduction</p>
      </div>
      <div id='about-content'>
        <div id='about-img'>
          <img src={profile} alt='profile' />
        </div>
        <div id='about-right-content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus arcu
            ut nec amet, dui proin velit volutpat nunc. Ligula ligula tristique
            est nisl tristique turpis leo id dis. Tellus turpis est ac
            consectetur sit dictum pretium.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './style.css';
import profile from '../../resources/profile1.jpg';
export default function About() {
  return (
    <div id='about-container'>
      <div id='about-header'>
        <h2>About Me</h2>
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
          <button>
            Download CV{' '}
            <span style={{ color: 'white', verticalAlign: 'center' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                style={{
                  fill: 'rgba(255, 255, 255, 1)',
                  transform: 'translate(2px,6px)',
                }}>
                <path d='M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z'></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

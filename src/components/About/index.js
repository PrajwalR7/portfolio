import React from 'react';
import './style.css';
import profile from '../../resources/profile1.jpg';
import AboutMeSVG from '../AboutMeSVG';
import { Element } from 'react-scroll';
import FileSaver from 'file-saver';
export default function About() {
  const download = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + '/assets/Prajwal R - Resume.pdf',
      'Resume.pdf'
    );
  };

  return (
    <Element id='about-link' name='about-link'>
      <div id='about-container'>
        <div id='about-header'>
          <h2>About Me</h2>
          <p>My introduction</p>
        </div>
        <div id='about-content'>
          <div id='about-svg'>
            <AboutMeSVG />
          </div>
          <div id='about-right-content'>
            <p>
              Upcoming undergrad, currently pursuing B.E (Information Science)
              at Atria Institute of Technology.
            </p>
            <button onClick={download}>
              Download CV
              {/* <span style={{ color: 'white', verticalAlign: 'center' }}>
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
              </span> */}
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}

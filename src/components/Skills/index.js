import React, { useEffect, useState } from 'react';
import JS from '../../resources/js.svg';
import Rjs from '../../resources/react.svg';
import Java from '../../resources/java.svg';
import node from '../../resources/node.svg';
import mongo from '../../resources/leaf.svg';
import mysql from '../../resources/mysql.svg';
import ht from '../../resources/html.svg';
import css from '../../resources/css.svg';
import fire from '../../resources/firebase.svg';
import './style.css';

export default function Skills() {
  const [imgColor, setImgColor] = useState('black');

  const waste = document.getElementById('waste');

  useEffect(() => {
    // if (imgColor === 'black') {
    //   waste.style.zIndex = -1;
    // } else {
    //   waste.style.zIndex = 1;
    // }
    // waste.style.backgroundColor = imgColor;
  }, [imgColor]);

  const [bodyClass, setBodyClass] = useState('skills-container');
  const changebodyBG = (color, imgC) => {
    setBodyClass(color);
    setImgColor(imgC);
  };

  const skillArray = [JS, Rjs];

  return (
    <>
      <div id='waste'></div>
      <h2 id='head-skill'>Skills</h2>
      <div id='skills-container' style={{ backgroundColor: `${bodyClass}` }}>
        <div className='skillbox' id='JS'>
          <img src={JS} alt='js' />
        </div>
        <div className='skillbox' id='react'>
          <img src={Rjs} alt='rjs' />
        </div>
        <div className='skillbox' id='node'>
          <img
            style={{ backgroundColor: `${imgColor}` }}
            src={node}
            alt='rjs'
            onMouseEnter={() => changebodyBG('#57a545', 'white')}
            onMouseLeave={() => changebodyBG('black', 'black')}
          />
        </div>
        <div className='skillbox' id='java'>
          <img src={Java} alt='rjs' />
        </div>
        <div className='skillbox' id='mongo'>
          <img src={mongo} alt='rjs' />
        </div>
        <div className='skillbox' id='mysql'>
          <img src={mysql} alt='rjs' />
        </div>
        <div className='skillbox' id='fire'>
          <img src={fire} alt='rjs' />
        </div>
        <div className='skillbox' id='html'>
          <img src={ht} alt='rjs' />
        </div>
        <div className='skillbox' id='css'>
          <img src={css} alt='rjs' />
        </div>
      </div>
    </>
  );
}

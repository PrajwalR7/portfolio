import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { homeRef } from '../Home';
import './style.css';
import 'boxicons';
export default function NavBar() {
  const [menuDown, setMenuDown] = useState(false);

  const menuHandler = () => {
    setMenuDown(!menuDown);
  };

  let [bigScreen] = useMediaQuery('(min-width:1000px)');
  console.log(bigScreen);
  return (
    <nav>
      {menuDown && (
        <div id='menu-down'>
          <div id='menu-head'>
            <span>Portfolio</span>
            <span id='eye-box'>
              <box-icon name='hide' size='md' onClick={menuHandler}></box-icon>
            </span>
          </div>
          <div id='menu-list'>
            <li
              onClick={window.scrollTo({
                top: homeRef.current.offsetTop,
                behavior: 'smooth',
              })}>
              Home
            </li>
            <li>About</li>
            <li>Ed & Ex</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
          </div>
        </div>
      )}
      <span>
        <box-icon name='infinite' size='md'></box-icon>
      </span>
      {!bigScreen ? (
        <span style={{ marginRight: '12px' }}>
          <box-icon name='menu' size='md' onClick={menuHandler}></box-icon>
        </span>
      ) : (
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              window.location.replace('/#home-container');
            }}>
            Home
          </li>
          <li>About</li>
          <li>Ed&Ex</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}

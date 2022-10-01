import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import './style.css';
import 'boxicons';
import Scroll, { Link } from 'react-scroll';

export default function NavBar() {
  const [menuDown, setMenuDown] = useState(false);

  // const handleClick = (e) => {
  //   console.log('Hello');
  //   e.preventDefault();
  //   console.log(e.target);
  //   e.target.style.color = 'black';
  // };

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
            <li>
              <Link to='home-link' spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li>
              <Link to='about-link' spy={true} smooth={true} offset={-80}>
                About
              </Link>
            </li>
            <li>
              <Link to='edex-link' spy={true} smooth={true} offset={-80}>
                Ed&Ex
              </Link>
            </li>
            <li>
              <Link to='skills-link' spy={true} smooth={true} offset={-80}>
                Skills
              </Link>
            </li>
            <li>
              <Link to='project-link' spy={true} smooth={true} offset={-80}>
                Project
              </Link>
            </li>
            <li>
              <Link to='contact-link' spy={true} smooth={true} offset={-50}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      )}
      <span>
        <box-icon name='infinite' size='md'></box-icon>
      </span>
      {!bigScreen ? (
        <span style={{ marginRight: '12px', color: 'inherit ' }}>
          <box-icon name='menu' size='md' onClick={menuHandler}></box-icon>
        </span>
      ) : (
        <ul>
          <li>
            <Link to='home-link' spy={true} smooth={true} offset={-50}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about-link' spy={true} smooth={true} offset={-50}>
              About
            </Link>
          </li>
          <li>
            <Link to='edex-link' spy={true} smooth={true} offset={-50}>
              Ed&Ex
            </Link>
          </li>
          <li>
            <Link to='skills-link' spy={true} smooth={true} offset={-50}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='project-link' spy={true} smooth={true} offset={-50}>
              Project
            </Link>
          </li>
          <li>
            <Link to='contact-link' spy={true} smooth={true} offset={-50}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

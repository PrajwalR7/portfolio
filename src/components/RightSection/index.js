import React from 'react';
import './style.css';
import profile from '../../resources/profile1.jpg';
import { useMediaQuery } from '@chakra-ui/react';
import 'boxicons';
import { Link } from 'react-scroll';
export default function RightSection() {
  let [bigScreen] = useMediaQuery('(min-width:1000px)');
  return (
    <div id='right-sec'>
      <div id='right-left-sec'>
        <h1>Prajwal Ramesh</h1>
        <h3>UI developer</h3>
        <p>
          Im a creative designer based in India and im very passionate and
          dedicated to my work
        </p>
        <Link to='contact-link' spy={true} smooth={true} offset={-80}>
          <button id='say-hello'>Say Hello</button>
        </Link>
      </div>
      <div id='right-right-sec'>
        <img src={profile} alt='profile' />
      </div>
    </div>
  );
}

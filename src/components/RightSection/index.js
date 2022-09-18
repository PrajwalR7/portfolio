import React from 'react';
import './style.css';
import profile from '../../resources/profile1.jpg';
import 'boxicons';
export default function RightSection() {
  return (
    <div id='right-sec'>
      <div id='right-left-sec'>
        <h1>Prajwal Ramesh</h1>
        <h3>UI developer</h3>
        <p>
          Im a creative designer based in India and im very passionate and
          dedicated to my work
        </p>
        <button>Say Hello</button>
      </div>
      <div id='right-right-sec'>
        <img src={profile} alt='profile' />
      </div>
    </div>
  );
}

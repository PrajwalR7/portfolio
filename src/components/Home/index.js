import React, { useRef } from 'react';
import RightSection from '../RightSection';
import { useMediaQuery } from '@chakra-ui/react';
import SideBar from '../SideBar';

import './style.css';
export let homeRef;
export default function Home() {
  homeRef = useRef(null);

  let [bigScreen] = useMediaQuery('(min-width:1000px)');

  return (
    <div id='home-container' ref={homeRef}>
      {bigScreen ? <SideBar /> : null}
      <RightSection />
    </div>
  );
}

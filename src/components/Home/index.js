import React from 'react';
import RightSection from '../RightSection';
import SideBar from '../SideBar';
import './style.css';
export default function Home() {
  return (
    <div id='home-container'>
      <SideBar />
      <RightSection />
    </div>
  );
}

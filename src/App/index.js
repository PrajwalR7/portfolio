import React from 'react';
import './style.css';
import NavBar from '../components/NavBar';
import Rest from '../components/Rest';

export default function App() {
  const nav = document.getElementsByTagName('nav');

  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 0) {
      nav[0].classList.add('add-shadow');
    } else {
      nav[0].classList.remove('add-shadow');
    }
  });

  return (
    <>
      <NavBar />
      <Rest />
    </>
  );
}

import React, { useState } from 'react';
import './style.css';

export default function ProjectTile(props) {
  const [toggler, setToggler] = useState(false);

  const togglePopUp = () => {
    setToggler(true);
  };

  return (
    <>
      {toggler ? (
        <div id='popup'>
          <section id='pop-sec'>
            <h1>{props.data.title}</h1>
            <p>{props.data.desc}</p>
            <button
              id='button'
              onClick={() => {
                setToggler(false);
              }}>
              Close
            </button>
          </section>
        </div>
      ) : null}
      <section onClick={togglePopUp} id='tile-sec'>
        <h2>{props.data.title}</h2>
        <p>{props.data.desc}</p>
        <p>{props.data.tech}</p>
      </section>
    </>
  );
}

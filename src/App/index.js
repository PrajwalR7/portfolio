import React from 'react';
import Project from '../components/Project/index';
import Skills from '../components/Skills/index';
import '../App/index.css';
import profile from '../resources/profile.jpg';

export default function App() {
  return (
    <div id='main-container'>
      <nav>
        <ul>
          <li>About</li>
          <li>Project</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className='first-sec'>
        <figure>
          <img src={profile} alt='my profile' />
          <figcaption>
            <h2>Developer | Student</h2>
          </figcaption>
          <figcaption>
            <p>
              Student of Information Science with strong foundation in software
              engineering and programming principles. Ability to quickly learn
              and master new technologies, capable of working in both team and
              self-directed settings. To work for an organization which provides
              me the opportunity to improve my skills and knowledge to grow
              along with the organization objective.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className='first-sec'>
        <Project />
      </section>

      <section className='first-sec'>
        <Skills />
      </section>
    </div>
  );
}

import React from 'react';
import './style.css';
import netflix from '../../resources/netflix.jpg';
import chat from '../../resources/chat.jpg';
import reddit from '../../resources/reddit.jpg';
import att from '../../resources/a-t.png';
import { Element } from 'react-scroll';
export default function Project() {
  const projectList = [
    {
      name: 'Netflix Clone',
      img: netflix,
      desc: 'Basic clone of netflix',
    },
    {
      name: 'Chat Application',
      img: chat,
      desc: 'Basic chat app',
    },
    {
      name: 'Reddit CLI',
      img: reddit,
      desc: 'Basic CLI for reddit',
    },
    {
      name: 'Audio-Text',
      img: att,
      desc: 'Basic audio-text converter',
    },
  ];

  return (
    <Element id='project-link' name='project-link'>
      <div id='project-container'>
        <div id='project-header'>
          <h2>Projects</h2>
          <p>My recent works</p>
        </div>
        <div id='project-content'>
          {projectList.map((ele) => {
            return <ProjectListItem data={ele} />;
          })}
        </div>
      </div>
    </Element>
  );
}

export const ProjectListItem = ({ data }) => {
  return (
    <div id='outer-proj-cont'>
      <div id='inner-project-container'>
        <img src={data.img} alt={data.name} />
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

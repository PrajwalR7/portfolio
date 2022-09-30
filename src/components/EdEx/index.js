import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import './style.css';
import { Element } from 'react-scroll';
export default function EdEx() {
  const [contentType, setContentType] = useState('ed');
  const timeLineHandler = (type, event) => {
    setContentType(type);
  };

  const edContent = [
    {
      type: 'B.E',
      name: 'Atria Institute of Technology',
      time: '2019 - 2023',
    },
    {
      type: '12th',
      name: 'Vidya Mandir Ind. PU College',
      time: '2017-2019',
    },
    {
      type: '10th',
      name: 'TNCES',
      time: '2016-2017',
    },
  ];

  const exContent = [
    {
      type: 'SDE Intern',
      name: 'Ezyfi Pvt. Ltd.',
      time: 'Nov 2021 - Jan 2022',
    },
    {
      type: 'Backend Engineer Intern',
      name: 'Technoboot',
      time: 'Nov 2021 - Jan 2022',
    },
  ];

  return (
    <Element id='edex-link' name='edex-link'>
      <div id='edex-container'>
        <div id='edex-header'>
          <h2>Ed & Ex</h2>
          <p>My journey</p>
        </div>
        <div id='edex-content'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <>
              <box-icon type='solid' name='school' size='md'></box-icon>
              <span
                id='head-span'
                style={{
                  fontSize: '1.2rem',
                  marginLeft: '0.5rem',
                  marginRight: '2rem',
                }}
                onClick={(e) => timeLineHandler('ed', e)}>
                Education
              </span>
            </>
            <>
              <box-icon
                type='solid'
                name='briefcase-alt-2'
                size='md'></box-icon>
              <span
                id='head-span'
                style={{ fontSize: '1.2rem', marginLeft: '0.5rem' }}
                onClick={() => timeLineHandler('ex')}>
                Experience
              </span>
            </>
          </div>
          {contentType === 'ed' ? (
            <TimeLine data={edContent} />
          ) : (
            <TimeLine data={exContent} />
          )}
        </div>
      </div>
    </Element>
  );
}

export const TimeLine = (props) => {
  console.log(props);
  return (
    <div id='timeline-cont'>
      {props.data.map((ele, idx) => {
        return <TimeLineItem data={ele} />;
      })}
    </div>
  );
};

export const TimeLineItem = (props) => {
  console.log('HHello');
  console.log(props.data);
  return (
    <div id='tl-item-cont'>
      <div id='tl-item-inner'>
        <h3>{props.data.type}</h3>
        <p>{props.data.name}</p>
        <p>{props.data.time}</p>
        <span id='circle'></span>
        <span id='arrow'></span>
      </div>
    </div>
  );
};

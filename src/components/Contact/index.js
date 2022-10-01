import React from 'react';
import './style.css';
import { useMediaQuery } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';
export default function Contact() {
  let [bigScreen] = useMediaQuery('(min-width:1000px)');
  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_h8c2m5f',
        'template_sopo4rp',
        e.target,
        'a85of-xuKT1aqBECt'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        e.target = null;
      });
  };

  return (
    <Element id='contact-link' name='contact-link'>
      <div id='contact-container'>
        <div id='contact-header'>
          <h2>Contact</h2>
          <p>Get in touch</p>
        </div>
        <div id='contact-content'>
          {!bigScreen ? (
            <div id='links-contact'>
              <li id='github'>
                <a href='https://github.com/PrajwalR7' target='_blank'>
                  <box-icon type='logo' name='github' size='md'></box-icon>
                </a>
              </li>
              <li id='linkedin'>
                <a
                  href='https://www.linkedin.com/in/prajwal-ramesh-918a84187/'
                  target='_blank'>
                  <box-icon
                    name='linkedin-square'
                    type='logo'
                    size='md'
                    style={{ zIndex: 999 }}></box-icon>
                </a>
              </li>
              <li id='stack'>
                <a
                  href='https://stackoverflow.com/users/16412216/prajwal-ramesh'
                  target='_blank'>
                  <box-icon
                    name='stack-overflow'
                    type='logo'
                    size='md'></box-icon>
                </a>
              </li>
            </div>
          ) : null}
          <form onSubmit={(e) => formSubmit(e)}>
            <input type='text' name='from_name' placeholder='Name' />
            <input type='email' name='user_email' placeholder='Email' />
            <textarea name='message' placeholder='Message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </Element>
  );
}

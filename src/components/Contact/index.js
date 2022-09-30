import React from 'react';
import './style.css';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';
export default function Contact() {
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

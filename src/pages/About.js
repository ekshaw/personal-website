import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className='aboutpage'>
      <div className='about-top-wrapper'>
        <div className='about-top'>
          <p>
            <br />
          </p>
          <h2>Lorem ipsum</h2>
          <h3>dolor sit amet,</h3>
          <h2>Lorem ipsum</h2>
          <h3>dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <img
          src={require('../images/aboutTopGraphic.png')}
          alt='About Top Graphic'
          id='about-top-graphic'
        />
      </div>
      <div className='about-middle-wrapper'>
        <div className='about-middle'>
          <div className='about-middle-text'>
            <h2>Lorem ipsum</h2>
            <h3>dolor sit amet,</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate.
            </p>
          </div>
          <img
            src={require('../images/aboutMiddleGraphic.png')}
            alt='About Middle Graphic'
            id='about-middle-graphic'
          />
        </div>
      </div>
      <div className='about-bottom-wrapper'>
        <div className='about-bottom'>
          <h2>My Designer</h2>
          <h3>Must Haves*</h3>
          <p>*and very nice to haves :3</p>
        </div>
      </div>
    </div>
  );
}

export default About;

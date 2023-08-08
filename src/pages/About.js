import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className='about-page'>
      <div className='about-top-wrapper'>
        <div className='about-top'>
          <p>
            <br />
          </p>
          <h2>Hello there!</h2>
          <h3>Read a bit</h3>
          <h2>to find out more</h2>
          <h3>About me</h3>
          <p>
            Hello there! I'm Emily, a recent UC Berkeley graduate with a major in Electrical
            Engineering and Computer Science, complemented by The Berkeley Certificate in Design
            Innovation. My passion lies in UI/UX design, and I'm actively seeking opportunities to
            channel my expertise and creativity. Lately, I've been captivated by the vintage
            maximalism aesthetics (think sardine tins!). I'm currently working on a personal project
            to transform my apartment into a home cafe, so stay tuned for that :).
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
            <h2>When I'm</h2>
            <h3>not designing,</h3>
            <p>
              I'm still designing! Design seamlessly blends into every aspect of my life. I draw
              inspiration from the beauty of hiking and backpacking trips. Fashion becomes a
              platform for personal expression, allowing me to explore structures, colors, and
              patterns. Even in baking, I find a chance to decorate and appreciate the amazing
              product that comes from being methodical!
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
          <img
            src={require('../images/designer-must-haves.png')}
            alt='About Middle Graphic'
            id='about-middle-graphic'
          />
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import '../../styles/mobile/AboutMobile.css';

function AboutMobile() {
  return (
    <div className='about-page-mobile'>
      <div className='about-top-wrapper-mobile'>
        <div className='about-top-mobile'>
          <div className='about-top-text-mobile'>
            <h2>Hello there!</h2>
            <h3>Read a bit</h3>
            <h2>to find</h2>
            <h3>out more</h3>
            <h2>about me</h2>
          </div>
          <img
            src={require('../../images/aboutTopGraphic.png')}
            alt='About Top Graphic Mobile'
            id='about-top-graphic-mobile'
          />
        </div>
        <div className='about-top-content-mobile'>
          <p>
            Hello there! I'm Emily, a recent UC Berkeley graduate with a major in Electrical
            Engineering and Computer Science, complemented by The Berkeley Certificate in Design
            Innovation. My passion lies in UI/UX design, and I'm actively seeking opportunities to
            channel my expertise and creativity. Lately, I've been captivated by the vintage
            maximalism aesthetics (think sardine tins!). I'm currently working on a personal project
            to transform my apartment into a home cafe, so stay tuned for that :).
          </p>
        </div>
      </div>

      <div className='about-middle-wrapper-mobile'>
        <div className='about-middle-mobile'>
          <div className='about-middle-text-mobile'>
            <h2>When I'm not</h2>
            <h3>designing,</h3>
          </div>
          <img
            src={require('../../images/aboutMiddleGraphic.png')}
            alt='About Middle Graphic Mobile'
            id='about-middle-graphic-mobile'
          />
        </div>
        <div className='about-middle-content-mobile'>
          <p>
            I'm still designing! Design seamlessly blends into every aspect of my life. I draw
            inspiration from the beauty of hiking and backpacking trips. Fashion becomes a platform
            for personal expression, allowing me to explore structures, colors, and patterns. Even
            in baking, I find a chance to decorate and appreciate the amazing product that comes
            from being methodical!
          </p>
        </div>
      </div>
      <div className='about-bottom-wrapper-mobile'>
        <div className='about-bottom-mobile'>
          <h2>My Designer</h2>
          <h3>Must Haves*</h3>
          <p>*and very nice to haves :3</p>
          <img
            src={require('../../images/designer-must-haves-mobile.png')}
            alt='About Middle Graphic Mobile'
            id='about-middle-graphic-mobile'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMobile;

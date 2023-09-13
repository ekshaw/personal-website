import React from 'react';
import '../../styles/desktop/AboutDesktop.css';

function AboutDesktop() {
  return (
    <div className='about-page'>
      <div className='about-top-wrapper'>
        <div className='about-top'>
          <p>
            <br />
          </p>
          <h2>Read a bit to find out </h2>
          <h3>more about me</h3>
          <p>
            Hello there!😊 I'm Emily, a recent UC Berkeley graduate with a major in Electrical
            Engineering and Computer Science, complemented by The Berkeley Certificate in Design
            Innovation. While my background leans toward a more technical foundation, I found my
            passion in design, where my background provides a unique perspective for approaching
            design challenges. I'm currently working on a personal project to transform my apartment
            into a home cafe, complete with marketing assets, a menu, and packaging design. Stay
            tuned for that!🍵
            <br></br>
            <br></br>
            <br></br>I am open to internships, part-time, and full-time junior positions in the
            UX/UI, product design, and visual/graphic design fields.
          </p>
        </div>
        <div className='about-top-images'>
          <img
            src={require('../../images/aboutTopGraphic.png')}
            alt='About Top Graphic'
            id='about-top-graphic'
          />
          <img
            src={require('../../images/aboutTopPic.jpg')}
            alt='About Top Picture'
            id='about-top-picture'
          />
          <img
            src={require('../../images/aboutTopFact.png')}
            alt='About Top Fact'
            id='about-top-fact'
          />
        </div>
      </div>
      <div className='about-middle-wrapper'>
        <div className='about-middle'>
          <img
            src={require('../../images/aboutMiddlePic.JPG')}
            alt='About Middle Picture'
            id='about-middle-picture'
          />
          <img
            src={require('../../images/aboutMiddleFact.png')}
            alt='About Middle Fact'
            id='about-middle-fact'
          />
          <div className='about-middle-text'>
            <h2>When I'm</h2>
            <h3>not designing,</h3>
            <p>
              I'm still designing! Design seems to find its way into every aspect of my life. I draw
              inspiration from hiking and backpacking trips.🏕️ Fashion is a platform for personal
              expression where I can explore structures, colors, and patterns. Even when I stress
              bake, I love decorating cakes and crafting pasteries while celebrating the amazing
              products that come from being methodical!🎂
            </p>
          </div>
        </div>
        <img
          src={require('../../images/aboutMiddleGraphic.png')}
          alt='About Middle Graphic'
          id='about-middle-graphic'
        />
      </div>
      {/* <div className='about-bottom-wrapper'>
        <div className='about-bottom'>
          <h2>My Designer</h2>
          <h3>Must Haves*</h3>
          <p>*and very nice to haves🤠</p>
          <img
            src={require('../../images/designer-must-haves.png')}
            alt='Designer Must Haves'
            id='designer-must-haves'
          />
        </div>
      </div> */}
    </div>
  );
}

export default AboutDesktop;

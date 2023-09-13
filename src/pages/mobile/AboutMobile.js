import React from 'react';
import '../../styles/mobile/AboutMobile.css';

function AboutMobile() {
  return (
    <div className='about-page-mobile'>
      <div className='about-top-wrapper-mobile'>
        <div className='about-top-mobile'>
          <div className='about-top-text-mobile'>
            <h3>Read a bit</h3>
            <h2>to find</h2>
            <h3>out more</h3>
            <h2>about me</h2>
          </div>
          <img
            src={require('../../images/aboutTopGraphicMobile.png')}
            alt='About Top Graphic Mobile'
            id='about-top-graphic-mobile'
          />
        </div>
        <div className='about-top-content-mobile'>
          <p>
            Hello there!😊 I'm Emily, a recent UC Berkeley graduate with a major in Electrical
            Engineering and Computer Science, complemented by The Berkeley Certificate in Design
            Innovation. While my background leans toward a more technical foundation, I found my
            passion in design, where my background provides a unique perspective for approaching
            design challenges. I'm currently working on a personal project to transform my apartment
            into a home cafe, complete with marketing assets, a menu, and packaging design. Stay
            tuned for that!🍵
            <br></br>
            <br></br>I am open to internships, part-time, and full-time junior positions in the
            UX/UI, product design, and visual/graphic design fields.
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
            src={require('../../images/aboutMiddleGraphicMobile.png')}
            alt='About Middle Graphic Mobile'
            id='about-middle-graphic-mobile'
          />
        </div>
        <div className='about-middle-content-mobile'>
          <p>
            I'm still designing! Design blends into every aspect of my life. I draw inspiration from
            hiking and backpacking trips.🏕️ Fashion is a platform for personal expression where I
            explore structures, colors, and patterns. Even when I stress bake, I love to decorate
            cakes and pasteries while celebrating the amazing products that come from being
            methodical!🎂
          </p>
        </div>
      </div>
      {/* <div className='about-bottom-wrapper-mobile'>
        <div className='about-bottom-mobile'>
          <h2>My Designer</h2>
          <h3>Must Haves*</h3>
          <p>*and very nice to haves🤠</p>
          <img
            src={require('../../images/designer-must-haves-mobile.png')}
            alt='About Middle Graphic Mobile'
            id='about-middle-graphic-mobile'
          />
        </div>
      </div> */}
    </div>
  );
}

export default AboutMobile;

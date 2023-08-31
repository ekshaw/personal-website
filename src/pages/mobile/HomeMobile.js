import React from 'react';
import '../../styles/mobile/HomeMobile.css';
import ScrollingText from '../../components/ScrollingText';

function HomeMobile() {
  return (
    <div className='homepage-mobile'>
      <div className='home-top-wrapper-mobile'>
        <div className='home-top-mobile'>
          <div className='hello-wrapper-mobile'>
            <h1>
              Hello, design enthusiasts! Step into Emily&#39;s creative playground
              <span className='span'>→ </span>a showcase of my work and just a place to get to know
              me :)
            </h1>
          </div>
          <div className='top-graphic-container-mobile'>
            <img
              src={require('../../images/topGraphicMobile.png')}
              alt='Top Graphic Mobile'
              id='top--mobile'
            />
          </div>
        </div>
      </div>

      <div className='scrolling-text-container-mobile'>
        <a href='mailto:emily253shaw@gmail.com'>
          <ScrollingText />
        </a>
      </div>

      <div className='home-middle-wrapper-mobile'>
        <div className='home-middle-mobile'>
          <div className='icon-item-mobile'>
            <img
              src={require('../../images/webIcon.png')}
              alt='Web Icon Mobile'
              id='web-icon-mobile'
            />
            <h4 className='heading-wrapper-left-mobile'>
              UI &amp; Web<br></br> Design
            </h4>
          </div>
          <div className='icon-item-mobile'>
            <h4 className='heading-wrapper-right-mobile'>
              Branding &amp; <br></br>Marketing
            </h4>
            <img
              src={require('../../images/brandingIcon.png')}
              alt='Branding Icon Mobile'
              id='branding--mobile'
            />
          </div>
          <div className='icon-item-mobile'>
            <img
              src={require('../../images/productIcon.png')}
              alt='Product Icon Mobile'
              id='product-icon-mobile'
            />
            <h4 className='heading-wrapper-left-mobile'>
              Graphic <br></br>Design
            </h4>
          </div>
        </div>
        <div className='work-btn-container-mobile'>
          <a href='/work'>
            <div className='work-btn-mobile'>
              <p>Check out my work!</p>
            </div>
          </a>
        </div>
      </div>

      <div className='home-bottom-wrapper-mobile'>
        <div className='home-bottom-mobile'>
          <div className='home-bottom-text-mobile'>
            <h4>Get in Touch!</h4>
            <p>
              Always open to meeting more lovely people. Contact me for design inquires. Give me a
              book recommendation. Just say hello!
            </p>
            <div className='email-btn-container-mobile'>
              <a href='mailto:emily253shaw@gmail.com' class='email-btn-mobile'>
                <p>Contact Me</p>
              </a>
            </div>
          </div>
        </div>
        <img
          src={require('../../images/bottomGraphic.png')}
          alt='Bottom Graphic Mobile'
          id='bottom-graphic-mobile'
        />
      </div>
    </div>
  );
}

export default HomeMobile;

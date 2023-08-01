import React from 'react';
import '../styles/Home.css';
import ScrollingText from '../components/ScrollingText';

function Home() {
  return (
    <div className='homepage'>
      <div className='home-top-wrapper'>
        <div className='home-top'>
          <div className='hello-wrapper'>
            <h1>
              Hello, design enthusiasts! Step into Emily&#39;s creative playground{' '}
              <span className='span'>→ </span>a showcase of my work and just a place to get to know
              me :)
            </h1>
          </div>
          <div className='top-graphic-container'>
            <img src={require('../images/topGraphic.png')} alt='Top Graphic' id='top-graphic' />
          </div>
        </div>
      </div>

      <div className='scrolling-text-container'>
        <a href='mailto:emily253shaw@gmail.com'>
          <ScrollingText />
        </a>
      </div>

      <div className='home-middle-wrapper'>
        <div className='home-middle'>
          <div className='icon-item'>
            <img src={require('../images/webIcon.png')} alt='Web Icon' id='web-icon' />
            <h4 className='heading-wrapper'>
              UI &amp; Web<br></br> Design
            </h4>
            <p className='text-wrapper'>
              With aesthetics and user psychology in mind, the focus is on visually captivating
              interfaces that engage users. Web design ensures meticulous consideration of every
              aspect, from layout and structure to website responsiveness and performance.
            </p>
          </div>
          <div className='icon-item'>
            <img src={require('../images/productIcon.png')} alt='Product Icon' id='product-icon' />
            <h4 className='heading-wrapper'>
              Graphic <br></br>Design
            </h4>
            <p className='text-wrapper'>
              Understanding user needs and market trends, the goal is to craft innovative and
              functional solutions. With form, function, and aesthetics in mind, products are
              designed to create captivating and user-centric experiences.
            </p>
          </div>
          <div className='icon-item'>
            <img
              src={require('../images/brandingIcon.png')}
              alt='Branding Icon'
              id='branding-icon'
            />
            <h4 className='heading-wrapper'>
              Branding &amp; <br></br>Marketing
            </h4>
            <p className='text-wrapper'>
              From brand identity development to strategic campaigns, we want to resonate with
              customers. By combining creativity, storytelling, and market insights, brands are
              positioned to stand out, connect with audiences, and achieve long-term success.
            </p>
          </div>
        </div>
        <div className='work-btn-container'>
          <a href='/work'>
            <div className='work-btn'>
              <p>Check out my work!</p>
            </div>
          </a>
        </div>
      </div>

      <div className='home-bottom-wrapper'>
        <div className='home-bottom'>
          <div className='home-bottom-text'>
            <h4>Get in Touch!</h4>
            <p>
              Always down to meet more lovely people. Contact me to collaborate on a project,
              brainstorm ideas, recommend a book, or just say hello!
            </p>
            <p>...</p>
            <div className='email-btn-container'>
              <a href='mailto:emily253shaw@gmail.com' class='email-btn'>
                <p>Contact Me</p>
              </a>
            </div>
          </div>
        </div>
        <img
          src={require('../images/bottomGraphic.png')}
          alt='Bottom Graphic'
          id='bottom-graphic'
        />
      </div>
    </div>
  );
}

export default Home;

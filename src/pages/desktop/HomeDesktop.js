import React, { useState } from 'react';
import '../../styles/desktop/HomeDesktop.css';
import ScrollingText from '../../components/ScrollingText';

function HomeDesktop() {
  // Use state to track the visibility of the conversation starters
  const [showConversationStarters, setShowConversationStarters] = useState(false);

  // Function to toggle the visibility of conversation starters
  const toggleConversationStarters = () => {
    setShowConversationStarters(!showConversationStarters);
  };

  return (
    <div className='homepage'>
      <div className='home-top-wrapper'>
        <div className='home-top'>
          <div className='hello-wrapper'>
            <h1>
              multidisciplinary designer. born and raised in washington. graduated from uc berkeley.
              based in the bay area. <span className='span'> → </span> have a look around to explore
              my work and get to know me✨
            </h1>
          </div>
          <div className='top-graphic-container'>
            <img src={require('../../images/topGraphic.png')} alt='Top Graphic' id='top-graphic' />
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
            <img src={require('../../images/webIcon.png')} alt='Web Icon' id='web-icon' />
            <h4 className='heading-wrapper'>
              📱ui/ux <br></br>design
            </h4>
            <p className='text-wrapper'>
              Creating visually appealing and intuitive digital interfaces that provide users with a
              seamless and enjoyable experience
            </p>
          </div>
          <div className='icon-item'>
            <img
              src={require('../../images/productIcon.png')}
              alt='Product Icon'
              id='product-icon'
            />
            <h4 className='heading-wrapper'>
              graphic <br></br>design🎨
            </h4>
            <p className='text-wrapper'>
              Communicating ideas, messages, and concepts using typography, imagery, color, and
              layout in both print and digital media
            </p>
          </div>
          <div className='icon-item'>
            <img
              src={require('../../images/brandingIcon.png')}
              alt='Branding Icon'
              id='branding-icon'
            />
            <h4 className='heading-wrapper'>
              web 💻<br></br>development
            </h4>
            <p className='text-wrapper'>
              Building dynamic, interactive, and user-friendly websites to translate design concepts
              into vibrant digital experiences.
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
            <h4>📫get in touch!</h4>
            <p>
              Always open to meeting more lovely people. Contact me for design inquires. Give me a
              book recommendation. Just say hello!
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
          src={require('../../images/bottomGraphic.png')}
          alt='Bottom Graphic'
          id='bottom-graphic'
        />
      </div>
      <div
        className={`home-overlay ${showConversationStarters ? 'show-conversation-starters' : ''}`}>
        <img
          src={require('../../images/conversation.png')}
          alt='Conversation'
          id='conversation'
          onClick={toggleConversationStarters}
        />
        <div className='conversation-starters'>
          <img
            src={require('../../images/conversation-starter-01.png')}
            alt='Conversation Starter 01'
            id='conversation-starter-01'
          />
          <img
            src={require('../../images/conversation-starter-02.png')}
            alt='Conversation Starter 02'
            id='conversation-starter-02'
          />
          <img
            src={require('../../images/conversation-starter-03.png')}
            alt='Conversation Starter 03'
            id='conversation-starter-03'
          />
          <img
            src={require('../../images/conversation-starter-04.png')}
            alt='Conversation Starter 04'
            id='conversation-starter-04'
          />
          <img
            src={require('../../images/conversation-starter-05.png')}
            alt='Conversation Starter 05'
            id='conversation-starter-05'
          />
        </div>
      </div>
    </div>
  );
}

export default HomeDesktop;

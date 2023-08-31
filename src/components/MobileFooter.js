import React from 'react';
import '../styles/MobileFooter.css';

function MobileFooter() {
  return (
    <footer>
      <div className='footer-wrapper-mobile'>
        <div className='footer-icons-mobile'>
          <a href='https://www.instagram.com/eshawmily/' target='_blank' className='footer-icon'>
            <img
              src={require('../images/instagramMobile.png')}
              alt='Instagram Mobile'
              id='instagram-mobile'
            />
          </a>
          <a href='https://github.com/ekshaw' target='_blank' className='footer-icon'>
            <img
              src={require('../images/githubMobile.png')}
              alt='Github Mobile'
              id='github-mobile'
            />
          </a>
          <a href='https://www.linkedin.com/in/ekshaw/' target='_blank' className='footer-icon'>
            <img
              src={require('../images/linkedinMobile.png')}
              alt='Linkedin Mobile'
              id='linkedin-mobile'
            />
          </a>
        </div>
        <div className='footer-text-mobile'>
          <p>
            Want to connect? <br />
            Follow me on my socials.
            <br />
            Check out my website on GitHub.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;

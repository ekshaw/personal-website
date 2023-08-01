import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-text'></div>
        <p>
          Always looking to connect. Follow me on my socials.
          <br />
          Check out my website on GitHub.
        </p>
        <div className='footer-icons'>
          <a href='https://www.instagram.com/eshawmily/' target='_blank' className='footer-icon'>
            <img src={require('../images/instagram.png')} alt='Instagram' id='instagram' />
          </a>
          <a href='https://github.com/ekshaw' target='_blank' className='footer-icon'>
            <img src={require('../images/github.png')} alt='Github' id='github' />
          </a>
          <a href='https://www.linkedin.com/in/ekshaw/' target='_blank' className='footer-icon'>
            <img src={require('../images/linkedin.png')} alt='Linkedin' id='linkedin' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

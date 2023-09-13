import React from 'react';
import '../styles/Footer.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-text'></div>
        <p>
          Want to connect? Follow me on my socials.
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
      <div className='back-to-top'>
        <img
          onClick={scrollToTop}
          src={require('../images/back-to-top.png')}
          alt='Back to Top'
          id='back-to-top'
        />
      </div>
    </footer>
  );
}

export default Footer;

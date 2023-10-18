import React from 'react';
import '../styles/Footer.css';
import Pdf from '../images/resume.pdf';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const onResumeClick = () => {
  window.open(Pdf);
};

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-text'></div>
        <p>
          Want to connect on LinkedIn?
          <br />
          Check out my resume. See my website on GitHub.
        </p>
        <div className='footer-icons'>
          <a href='https://www.linkedin.com/in/ekshaw/' target='_blank' className='footer-icon'>
            <img src={require('../images/linkedin.png')} alt='Linkedin' id='linkedin' />
          </a>
          <a onClick={onResumeClick} className='footer-icon'>
            <img src={require('../images/resume.png')} alt='Resume' id='resume' />
          </a>
          <a href='https://github.com/ekshaw' target='_blank' className='footer-icon'>
            <img src={require('../images/github.png')} alt='Github' id='github' />
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

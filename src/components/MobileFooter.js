import React from 'react';
import '../styles/MobileFooter.css';
import Pdf from '../images/resume.pdf';

const onResumeClick = () => {
  window.open(Pdf);
};

function MobileFooter() {
  return (
    <footer>
      <div className='footer-wrapper-mobile'>
        <div className='footer-icons-mobile'>
          <a href='https://www.linkedin.com/in/ekshaw/' target='_blank' className='footer-icon'>
            <img
              src={require('../images/linkedin.png')}
              alt='Linkedin Mobile'
              id='linkedin-mobile'
            />
          </a>
          <a onClick={onResumeClick} className='footer-icon'>
            <img src={require('../images/resume.png')} alt='Resume Mobile' id='resume-mobile' />
          </a>
          <a href='https://github.com/ekshaw' target='_blank' className='footer-icon'>
            <img src={require('../images/github.png')} alt='Github Mobile' id='github-mobile' />
          </a>
        </div>
        <div className='footer-text-mobile'>
          <p>
            Want to connect on LinkedIn? <br />
            Check out my resume.
            <br />
            See my website on GitHub.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MobileFooter;

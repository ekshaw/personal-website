import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer'>
          <div className='footer-left'>
            <p>
              check out the website on my github 🤠
              <br />
              thanks for visiting 🙇🏻‍♀️ © 2023 Emily Shaw
            </p>
          </div>
          <div className='footer-right'>
            <a href='https://www.linkedin.com/in/ekshaw/' target='_blank' className='footer-icon'>
              <p>linkedin</p>
            </a>
            <a href='https://dribbble.com/emilyshaw' target='_blank' className='footer-icon'>
              <p>dribbble</p>
            </a>
            <a href='https://github.com/ekshaw' target='_blank' className='footer-icon'>
              <p>github</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

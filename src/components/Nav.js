import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import Pdf from '../images/resume.pdf';

function Nav() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <Link to='/' className='navbar-item-left' onClick={scrollToTop}>
          <h2>emily shaw</h2>
        </Link>
      </div>
      <div className='navbar-right'>
        <Link to='/about' className='navbar-item' onClick={scrollToTop}>
          <p>about</p>
        </Link>

        <a onClick={onResumeClick} class='navbar-item'>
          <p>resume</p>
        </a>

        <a href='mailto:emily253shaw@gmail.com' class='navbar-item'>
          <p>contact</p>
        </a>
      </div>
    </div>
  );
}

export default Nav;

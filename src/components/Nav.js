import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';
import { motion } from 'framer-motion';

function Nav() {
  // Create a state variable to hold the scale value
  const [scale, setScale] = useState(1);

  // Define the scaling animation variants
  const navScaleVariants = {
    scaled: {
      scale: 0.75,
      backgroundColor: '#ebe4ce',
      border: '1px solid #1f1f1f', // Add a 1px solid border with color #1f1f1f
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    unscaled: {
      scale: 1,
      backgroundColor: 'transparent',
      border: 'none', // Remove the border when the navbar is not scaled
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Listen for scroll events and update the scale based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 0;
      const scrolled = window.scrollY > scrollThreshold;
      setScale(scrolled ? 'scaled' : 'unscaled');
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav className='navbar' variants={navScaleVariants} animate={scale}>
      <Link to='/' className='navbar-item' onClick={scrollToTop}>
        <div className='navbar-item-text'>Home</div>
      </Link>

      <Link to='/about' className='navbar-item' onClick={scrollToTop}>
        <div className='navbar-item-text'>About</div>
      </Link>

      <Link to='/' className='navbar-item' onClick={scrollToTop}>
        <img src={require('../images/logo.png')} alt='Logo' id='logo-image' />
      </Link>

      <Link to='/work' className='navbar-item' onClick={scrollToTop}>
        <div className='navbar-item-text'>Work</div>
      </Link>

      <a href='mailto:emily253shaw@gmail.com' class='navbar-item'>
        <div className='navbar-item-text'>Contact</div>
      </a>
    </motion.nav>
  );
}

export default Nav;

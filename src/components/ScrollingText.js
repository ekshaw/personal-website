import React from 'react';
import '../styles/ScrollingText.css';
import { motion } from 'framer-motion';

const ScrollingText = () => {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-25.15%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div>
      <div class='scrolling-container'>
        <motion.div variants={marqueeVariants} animate='animate'>
          <div className='scrolling-text'>
            <p>Say Hello</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Have a Look Around</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Get in Touch</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Say Hello</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Have a Look Around</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Get in Touch</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Say Hello</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Have a Look Around</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Get in Touch</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Say Hello</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Have a Look Around</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
            <p>Get in Touch</p>
            <img src={require('../images/star.png')} alt='Star' id='star' />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingText;

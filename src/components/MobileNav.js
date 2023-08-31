import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import '../styles/MobileNav.css';

const ClosePath = props => (
  <motion.path
    fill='transparent'
    strokeWidth='1'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    initial='open'
    animate='closed'
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    {...props}
  />
);

const OpenPath = props => (
  <motion.path
    fill='transparent'
    strokeWidth='1'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    initial='closed'
    animate='open'
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    {...props}
  />
);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function MobileNav() {
  const [open, cycleOpen] = useCycle(false, true);

  const closeNavigation = () => {
    cycleOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (open && !event.target.closest('.navbar-container-mobile')) {
        closeNavigation();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  return (
    <div className='navbar-container-mobile'>
      <Link
        to='/'
        className='navbar-logo-mobile'
        onClick={() => {
          {
            open ? closeNavigation() : scrollToTop();
          }
          scrollToTop();
        }}>
        <img src={require('../images/logo.png')} alt='Logo' id='logo-image' />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 200,
              height: 'auto'
            }}
            exit={{
              width: 0,
              height: 'auto',
              transition: { delay: 0.5, duration: 0.3 }
            }}>
            <motion.div
              className='menu-container-mobile'
              initial='closed'
              animate='open'
              exit='closed'
              variants={sideVariants}>
              <motion.a variants={itemVariants}>
                <Link
                  to='/'
                  onClick={() => {
                    closeNavigation();
                    scrollToTop();
                  }}>
                  <div className='navbar-item-text-mobile'>
                    <h1>Home</h1>
                  </div>
                </Link>
              </motion.a>
              <motion.a variants={itemVariants}>
                <Link
                  to='/about'
                  onClick={() => {
                    closeNavigation();
                    scrollToTop();
                  }}>
                  <div className='navbar-item-text-mobile'>
                    <h1>About</h1>
                  </div>
                </Link>
              </motion.a>
              <motion.a variants={itemVariants}>
                <Link
                  to='/work'
                  onClick={() => {
                    closeNavigation();
                    scrollToTop();
                  }}>
                  <div className='navbar-item-text-mobile'>
                    <h1>Work</h1>
                  </div>
                </Link>
              </motion.a>
              <motion.a variants={itemVariants}>
                <a href='mailto:emily253shaw@gmail.com'>
                  <div className='navbar-item-text-mobile'>
                    <h1>Contact</h1>
                  </div>
                </a>
              </motion.a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <div className='nav-btn-container-mobile'>
          <button onClick={cycleOpen}>
            {open ? (
              <svg width='23' height='23' viewBox='0 0 23 23'>
                <OpenPath
                  variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' }
                  }}
                />
                <OpenPath
                  d='M 2 9.423 L 20 9.423'
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.1 }}
                />
                <OpenPath
                  variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' }
                  }}
                />
              </svg>
            ) : (
              <svg width='23' height='23' viewBox='0 0 23 23'>
                <ClosePath
                  variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' }
                  }}
                />
                <ClosePath
                  d='M 2 9.423 L 20 9.423'
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.1 }}
                />
                <ClosePath
                  variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' }
                  }}
                />
              </svg>
            )}
          </button>
        </div>
      </AnimatePresence>
    </div>
  );
}

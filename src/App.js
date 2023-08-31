import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
  return (
    <div className='app-container'>
      <Router>
        <Fragment>
          <div className='navbar-container'>
            {isDesktopOrLaptop && (
              <div className='nav-container-desktop'>
                <Nav />
              </div>
            )}

            {isMobile && (
              <div className='nav-container-mobile'>
                <MobileNav />
              </div>
            )}
          </div>
          <AnimatedRoutes />
        </Fragment>
      </Router>
      <div className='footer-container'>
        {isDesktopOrLaptop && (
          <div className='footer-container-desktop'>
            <Footer />
          </div>
        )}

        {isMobile && (
          <div className='footer-container-mobile'>
            <MobileFooter />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

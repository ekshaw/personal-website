import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
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
            {isDesktopOrLaptop && <Nav />}

            {isMobile && <MobileNav />}
          </div>

          <AnimatedRoutes />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;

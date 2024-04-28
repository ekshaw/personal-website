import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/AnimatedRoutes.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Design from '../pages/Design';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup className='transition-group'>
      <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
        <section className='route-section'>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route path='/design' element={<Design />} />
          </Routes>
        </section>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes;

import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Fragment>
          <div className='navbar-container'>
            <Nav />
          </div>
          <AnimatedRoutes />
        </Fragment>
      </Router>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

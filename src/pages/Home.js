import React from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import DesignCard from '../components/DesignCard';
import Designs from '../content/Designs';
import { useMediaQuery } from 'react-responsive';

const designCardRows = [];
for (var i = 0; i < Math.ceil(Designs.length / 2); i++) {
  designCardRows.push(
    <div className='design-card-row'>
      {2 * i < Designs.length ? <DesignCard index={2 * i} /> : null}
      {2 * i + 1 < Designs.length ? <DesignCard index={2 * i + 1} /> : null}
    </div>
  );
}

const designCardRowsMobile = [];
for (var i = 0; i < Designs.length; i++) {
  designCardRowsMobile.push(
    <div className='design-card-row-mobile'>
      {i < Designs.length ? <DesignCard index={i} /> : null}
    </div>
  );
}

function Home() {
  const isBig = useMediaQuery({
    query: '(min-device-width: 481px)'
  });
  const isSmall = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <div className='homepage'>
      <div className='home-top-wrapper'>
        <div className='home-top'>
          <h1>hi, i’m emily👋🏼</h1>
          <p>
            multidisciplinary🎨 designer. born and raised in 🌲washington. graduated from 🐻uc
            berkeley. based in the bay area🌉.<span className='span'> → </span> have a look around
            to explore my work and get to know me✨.
          </p>
        </div>
      </div>
      <div className='home-second-wrapper'>
        <img src={require('../images/home-01.png')} alt='Home Grass' id='home-grass' />
        <img src={require('../images/home-02.png')} alt='Home Flowers' id='home-flowers' />
        <div className='home-second'>
          <div className='home-second-left'>
            <h2>skills/tools</h2>
          </div>
          <div className='home-second-right'>
            <h3>user research & usability testing</h3>
            <h3>front end development</h3>
            <h3>graphic design</h3>
            <h3>figma</h3>
            <h3>xd</h3>
            <h3>illustrator</h3>
            <h3>photoshop</h3>
            <h3>react, node.js</h3>
            <h3>html, css, javascript</h3>
          </div>
        </div>
        <div className='home-second'>
          <div className='home-second-left'>
            <h2>capabilities</h2>
          </div>
          <div className='home-second-right'>
            <h3>web & app design</h3>
            <h3>static websites</h3>
            <h3>brand identity</h3>
            <h3>campaign development</h3>
            <h3>print design</h3>
            <h3>apparel design</h3>
            <h3>design workshops</h3>
          </div>
        </div>
      </div>

      <div className='home-third-wrapper'>
        <div className='design-card-col'>
          {isBig && <>{designCardRows}</>}

          {isSmall && <>{designCardRowsMobile}</>}
        </div>
      </div>

      <div className='home-bottom-wrapper'>
        <img src={require('../images/home-03.png')} alt='Home Waves' id='home-waves' />
        <img src={require('../images/home-04.png')} alt='Home Bubbles' id='home-bubbles' />
        <img src={require('../images/home-05.png')} alt='Home Drops' id='home-drops' />
        <div className='home-bottom'>
          <h1>get in touch!📫</h1>
          <p>
            always open to meeting more lovely people🧑‍🤝‍🧑. 📋contact me for design inquires. 📲follow
            me on my socials. give me a book recommendation📚. just say hello 💞
          </p>
          <p>...</p>
        </div>
      </div>

      <div className='home-footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

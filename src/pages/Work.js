import React from 'react';
import '../styles/Work.css';
import DesignCard from '../components/DesignCard';
import Designs from '../content/Designs';

const designCardRows = [];
for (var i = 0; i < Math.ceil(Designs.length / 2); i++) {
  designCardRows.push(
    <div className='design-card-row'>
      {2 * i < Designs.length ? <DesignCard index={2 * i} /> : null}
      {2 * i + 1 < Designs.length ? <DesignCard index={2 * i + 1} /> : null}
    </div>
  );
}

const Work = props => {
  return (
    <div class='workpage'>
      <div className='work-top-wrapper'>
        <div className='work-top'>
          <h3>Have a Look Around</h3>
          <img
            src={require('../images/workTopGraphic.png')}
            alt='Work Top Graphic'
            id='work -top-graphic'
          />
          <div className='personal-projects'>
            <img
              src={require('../images/personalProjects.png')}
              alt='Personal Projects'
              id='personal-projects'
            />
          </div>
          <div className='client-work'>
            <img src={require('../images/clientWork.png')} alt='Client Work' id='client-work' />
          </div>
        </div>
      </div>
      <div className='work-middle-wrapper'>
        <div className='work-middle'>
          <h2>A Collection of my Favorite Work</h2>
        </div>
      </div>
      <div className='work-bottom-wrapper'>
        <div className='design-card-col'>{designCardRows}</div>
      </div>
    </div>
  );
};

export default Work;

import React from 'react';
import '../../styles/desktop/WorkDesktop.css';
import DesignCard from '../../components/DesignCard';
import Designs from '../../content/Designs';

const designCardRows = [];
for (var i = 0; i < Math.ceil(Designs.length / 2); i++) {
  designCardRows.push(
    <div className='design-card-row'>
      {2 * i < Designs.length ? <DesignCard index={2 * i} /> : null}
      {2 * i + 1 < Designs.length ? <DesignCard index={2 * i + 1} /> : null}
    </div>
  );
}

const WorkDesktop = props => {
  return (
    <div class='workpage'>
      <div className='work-top-wrapper'>
        <div className='work-top'>
          <h3>some of my favorite projects😎</h3>
          <img
            src={require('../../images/aboutMiddleGraphic.png')}
            alt='Work Top Graphic'
            id='work -top-graphic'
          />
        </div>
      </div>
      <div className='work-bottom-wrapper'>
        <div className='design-card-col'>{designCardRows}</div>
      </div>
    </div>
  );
};

export default WorkDesktop;

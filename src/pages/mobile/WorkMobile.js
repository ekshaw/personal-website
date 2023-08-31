import React from 'react';
import '../../styles/mobile/WorkMobile.css';
import DesignCardMobile from '../../components/DesignCardMobile';
import Designs from '../../content/Designs';

const designCardRows = [];
for (var i = 0; i < Designs.length; i++) {
  designCardRows.push(
    <div className='design-card-row-mobile'>
      {i < Designs.length ? <DesignCardMobile index={i} /> : null}
    </div>
  );
}

const WorkMobile = props => {
  return (
    <div class='workpage-mobile'>
      <div className='work-top-wrapper-mobile'>
        <div className='work-top-mobile'>
          <h3>Have a Look</h3>
          <h3>Around</h3>
        </div>
        <div className='work-top-graphic-container-mobile'>
          <img
            src={require('../../images/workTopGraphic.png')}
            alt='Work Top Graphic Mobile'
            id='work-top-graphic-mobile'
          />
        </div>
      </div>
      {/* <div className='work-middle-wrapper-mobile'>
        <div className='work-middle-mobile'>
          <h2>A Collection of my Favorite Work</h2>
        </div>
      </div> */}
      <div className='work-bottom-wrapper-mobile'>
        <div className='design-card-col-mobile'>{designCardRows}</div>
      </div>
    </div>
  );
};

export default WorkMobile;

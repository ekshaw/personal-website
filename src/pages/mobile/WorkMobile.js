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
          <h3>some of</h3>
          <h3>my favorite</h3>
          <h3>projects😎</h3>
        </div>
        <div className='work-top-graphic-container-mobile'>
          <img
            src={require('../../images/workTopGraphic.png')}
            alt='Work Top Graphic Mobile'
            id='work-top-graphic-mobile'
          />
        </div>
      </div>
      <div className='work-bottom-wrapper-mobile'>
        <div className='design-card-col-mobile'>{designCardRows}</div>
      </div>
    </div>
  );
};

export default WorkMobile;

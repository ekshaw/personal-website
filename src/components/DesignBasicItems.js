import React from 'react';
import '../styles/DesignBasicItems.css';

const DesignBasicItems = ({ heading, title, summary, subimage, image, heroimage }) => {
  return (
    <div className={`design-basic-items-wrapper ${heading ? 'has-heading' : ''}`}>
      <div className='design-basic-items'>
        <div className='design-basic-items-left'>
          <div className='design-basic-items-heading'>{heading && <h4>{heading}</h4>}</div>
        </div>
        <div className='design-basic-items-right'>
          <div className='design-basic-items-title'>{title && <h2>{title}</h2>}</div>
          <div className='design-basic-items-summary'>{summary && <p>{summary}</p>}</div>
          {subimage && (
            <div className='design-basic-items-subimg'>
              <img src={subimage} alt={title || 'Design detail'} />
            </div>
          )}
        </div>
      </div>

      {image && (
        <div className='design-basic-items-img'>
          <img src={image} alt={title || 'Design detail'} />
        </div>
      )}
      {heroimage && (
        <div className='design-basic-items-hero-img'>
          <img src={heroimage} alt={title || 'Design detail'} />
        </div>
      )}
    </div>
  );
};

export default DesignBasicItems;

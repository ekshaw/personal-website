import React from 'react';
import '../styles/DesignFeatureItems.css';

const DesignFeatureItems = ({ title, features }) => {
  return (
    <div className='design-feature-items-wrapper'>
      <div className='design-feature-items'>
        {title && <h2>{title}</h2>}
        {features.map((item, index) => (
          <div
            key={index}
            className={`feature-item ${index % 2 === 0 ? 'design-even' : 'design-odd'}`}>
            {item.image && (
              <div className='feature-item-image'>
                <img src={item.image} alt={`Feature ${index}`} />
              </div>
            )}
            <div className='feature-item-details'>
              <div className='feature-item-subtitle'>
                <h4>{item.subtitle}</h4>
              </div>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignFeatureItems;

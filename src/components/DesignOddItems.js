import React from 'react';
import '../styles/DesignOddItems.css';

const DesignOddItems = ({ heading, title, summary, paragraph }) => {
  const oddItems = paragraph.map(({ subtitle, subparagraph }) => (
    <div className={`design-odd-item ${subtitle ? 'has-subtitle' : ''}`}>
      <div className='design-odd-item-left'>{subtitle && <h4>{subtitle}</h4>}</div>
      <div className='design-odd-item-right'>
        <p>{subparagraph}</p>
      </div>
    </div>
  ));

  return (
    <div className={`design-odd-items-wrapper ${heading ? 'has-heading' : ''}`}>
      <div className='design-odd-items-left'>
        <div className='design-odd-items-heading'>{heading && <h4>{heading}</h4>}</div>
      </div>
      <div className='design-odd-items-right'>
        <div className='design-odd-items-title'>{title && <h2>{title}</h2>}</div>
        <div className='design-odd-items-summary'> {summary && <p>{summary}</p>}</div>
        <div className='design-odd-items'>{oddItems}</div>
      </div>
    </div>
  );
};

export default DesignOddItems;

import React from 'react';
import '../styles/DesignEvenItems.css';

const DesignEvenItems = ({ heading, title, summary, paragraph }) => {
  const evenItems = paragraph.map(({ subtitle, subparagraph }) => (
    <div className='design-even-item'>
      <h4>{subtitle}</h4>
      <p>{subparagraph}</p>
    </div>
  ));

  return (
    <div className={`design-even-items-wrapper ${heading ? 'has-heading' : ''}`}>
      <div className='design-even-items-left'>
        <div className='design-even-items-heading'>{heading && <h4>{heading}</h4>}</div>
      </div>
      <div className='design-even-items-right'>
        <div className='design-even-items-title'>
          <h2>{title}</h2>
        </div>
        <div className='design-even-items-summary'> {summary && <p>{summary}</p>}</div>
        <div className='design-even-items'>{evenItems}</div>
      </div>
    </div>
  );
};

export default DesignEvenItems;

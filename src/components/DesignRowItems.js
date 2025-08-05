import React from 'react';
import '../styles/DesignRowItems.css';

const DesignRowItems = ({ title, summary, paragraph }) => {
  const rowItems = paragraph.map(({ subtitle, subparagraph }) => (
    <div className='design-row-item'>
      {subtitle && <h4>{subtitle}</h4>}
      <p>{subparagraph}</p>
    </div>
  ));

  return (
    <div className='design-row-items-wrapper'>
      <div className='design-row-items-title'>
        <h2>{title}</h2>
      </div>
      <div className='design-row-items-summary'>{summary && <p>{summary}</p>}</div>
      <div className='design-row-items'>{rowItems}</div>
    </div>
  );
};

export default DesignRowItems;

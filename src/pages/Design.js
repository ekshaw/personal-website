import React, { useEffect, useState } from 'react';
import Designs from '../content/Designs';
import { useLocation } from 'react-router-dom';
import '../styles/Design.css';

const Design = () => {
  const location = useLocation();
  const [designNum, setDesignNum] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const designId = searchParams.get('design');
    const designIndex = Designs.findIndex(design => design.designId === designId);
    setDesignNum(designIndex);
  }, [location.search]);

  if (designNum === -1) {
    return <div>Design not found</div>;
  }

  const images = Designs[designNum].images.map((image, index) => (
    <img key={index} src={image} alt={`Image ${index}`} className='design-image' />
  ));

  return (
    <div className='design-page'>
      <div className='design-wrapper'>
        <div className='design-images-wrapper'>{images}</div>
      </div>
    </div>
  );
};

export default Design;

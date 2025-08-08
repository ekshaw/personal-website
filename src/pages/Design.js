import React, { useEffect, useState } from 'react';
import Designs from '../content/Designs';
import { useLocation } from 'react-router-dom';
import '../styles/Design.css';
import Footer from '../components/Footer';
import DesignEvenItems from '../components/DesignEvenItems.js';
import DesignOddItems from '../components/DesignOddItems.js';
import DesignRowItems from '../components/DesignRowItems.js';
import DesignBasicItems from '../components/DesignBasicItems.js';
import DesignFeatureItems from '../components/DesignFeatureItems.js';

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

  const heroImageStyle = {
    backgroundImage: `url(${Designs[designNum].images[0]})`
  };

  const keysToComponentMap = {
    even: DesignEvenItems,
    odd: DesignOddItems,
    basic: DesignBasicItems,
    row: DesignRowItems,
    feature: DesignFeatureItems
  };

  const renderComponents = Designs[designNum].content.body.map(({ componentName, props }) => {
    const Component = keysToComponentMap[componentName];
    const isHeroImageOnlyBasic =
      componentName === 'basic' && Object.keys(props).length === 1 && props.heroimage;
    return (
      <div
        className={`design-component-layout-container ${
          isHeroImageOnlyBasic ? 'wide-image-only' : ''
        }`}>
        <Component {...props} />
      </div>
    );
  });

  return (
    <div className='design-page' style={heroImageStyle}>
      <div className='design-wrapper'>
        <div className='design-intro'>
          <div className='design-title'>
            <div className='design-title-left'>
              <h1>{Designs[designNum].title}</h1>
              <p>{Designs[designNum].overview}</p>
            </div>
            <div className='design-title-right'>
              <div className='design-title-right-item'>
                <h4>Role</h4>
                <p>{Designs[designNum].role}</p>
              </div>
              <div className='design-title-right-item'>
                <h4>Team</h4>
                <p>{Designs[designNum].team}</p>
              </div>
              <div className='design-title-right-item'>
                <h4>Timeline</h4>
                <p>{Designs[designNum].timeline}</p>
              </div>
              <div className='design-title-right-item'>
                <h4>Tools</h4>
                <p>{Designs[designNum].tools}</p>
              </div>
            </div>
          </div>
          <div className='design-title-image'>
            <img src={Designs[designNum].images[1]} alt={''} id={'hero-design'} />
          </div>
        </div>

        <div className='design-components'>{renderComponents}</div>
        <div className='design-outro-wrapper'>
          <a href={Designs[designNum].url}>
            <div className='design-outro'>
              <h1>
                {Designs[designNum].end}
                {Designs[designNum].url && (
                  <a href={Designs[designNum].url}>
                    <text> </text>
                    <text
                      style={{
                        textDecoration: 'underline',
                        textDecorationThickness: '.08vw',
                        color: 'black'
                      }}>
                      here
                    </text>
                  </a>
                )}
              </h1>
            </div>
          </a>
        </div>
      </div>
      <div className='design-footer-container'>
        <Footer />
      </div>
    </div>
  );
};

export default Design;

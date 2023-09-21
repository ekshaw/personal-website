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

  const features = Designs[designNum].features.map((feature, index) => (
    <div key={index} className={`feature ${index % 2 === 0 ? 'design-even' : 'design-odd'}`}>
      <img src={feature[2]} alt={`Feature ${index}`} />
      <div className='feature-details'>
        <h5>{feature[0]}</h5>
        <p>{feature[1]}</p>
      </div>
    </div>
  ));

  const heroImageStyle = {
    backgroundImage: `url(${Designs[designNum].images[0]})`
  };

  return (
    <div className='design-page' style={heroImageStyle}>
      <div className='design-wrapper'>
        <div className='design-intro'>
          <div className='design-title'>
            <div className='design-title-left'>
              <h1>{Designs[designNum].title}</h1>
              <p>{Designs[designNum].description}</p>
            </div>
            <div className='design-title-right'>
              <img src={require('../images/star.png')} alt='Star' id='star' />
              <p>TIMELINE: {Designs[designNum].timeline}</p>
            </div>
          </div>
          <div className='design-description'>
            <div className='design-description-left'>
              <h5>Role</h5>
              <p>{Designs[designNum].role}</p>
              <h5>Team</h5>
              <p>{Designs[designNum].team}</p>
              <h5>Type</h5>
              <p>{Designs[designNum].type}</p>
              <h5>Tools</h5>
              <p>{Designs[designNum].tools}</p>
            </div>
            <div className='design-description-right'>
              <p>{Designs[designNum].overview}</p>
            </div>
          </div>
        </div>
        <div className='design-context-wrapper'>
          <div className='design-context'>
            <div className='design-context-left'>
              <img
                src={Designs[designNum].images[1]}
                alt={'Context Design'}
                id={'context-design'}
              />
            </div>
            <div className='design-context-right'>
              <h1>context</h1>
              <h5>Problem</h5>
              <p>{Designs[designNum].problem}</p>
              <h5>Solution</h5>
              <p>{Designs[designNum].solution}</p>
              <h5>Question</h5>
              <p>{Designs[designNum].question}</p>
            </div>
          </div>
        </div>
        {Designs[designNum].research && (
          <div className='design-process'>
            <div className='design-process-left'>
              <h1>process</h1>
              <h5>Research</h5>
              <p>{Designs[designNum].research}</p>
              <h5>Ideation</h5>
              <p>{Designs[designNum].ideation}</p>
            </div>
            <div className='design-process-right'>
              <img
                src={Designs[designNum].images[2]}
                alt={'Process Design'}
                id={'process-design'}
              />
            </div>
          </div>
        )}
        <div className='design-features-wrapper'>
          <div className='design-features'>
            <h1>features overview</h1>
            {features}
          </div>
        </div>
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
        {/* <div className='design-images-wrapper'>{images}</div> */}
      </div>
    </div>
  );
};

export default Design;

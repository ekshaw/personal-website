import React, { Component } from 'react';
import '../styles/DesignCard.css';
import Designs from '../content/Designs';

class DesignCard extends Component {
  render() {
    const coverDesign = Designs[this.props.index].images[0];
    return (
      <div className='design-card-container'>
        <a href={`/design?design=${Designs[this.props.index].designId}`}>
          <div className='design-card-image'>
            <img src={coverDesign} alt={'Cover Design'} id={'cover-design'} />
          </div>
          <div className='design-card-text-container'>
            <div className='design-card-text'>
              <h4>{Designs[this.props.index].type}</h4>
              <h2>{Designs[this.props.index].title}</h2>
              <p>{Designs[this.props.index].description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default DesignCard;

import React, { Component } from 'react';
import '../styles/DesignCard.css';
import Designs from '../content/Designs';

class DesignCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
              <h5>{Designs[this.props.index].type}</h5>
              <h1>{Designs[this.props.index].title}</h1>
              <p>{Designs[this.props.index].description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default DesignCard;

import React, { Component } from 'react';
import '../styles/DesignCardMobile.css';
import Designs from '../content/Designs';

class DesignCardMobile extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const coverDesign = Designs[this.props.index].images[0];
    return (
      <div className='design-card-container-mobile'>
        <a href={`/design?design=${Designs[this.props.index].designId}`}>
          <div className='design-card-image-mobile'>
            <img src={coverDesign} alt={'Cover Design'} id={'cover-design'} />
          </div>
          <div className='design-card-text-container-mobile'>
            <div className='design-card-text-mobile'>
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

export default DesignCardMobile;

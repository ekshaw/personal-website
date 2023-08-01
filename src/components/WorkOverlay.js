import React, { Component } from 'react';

class WorkOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OverlayHidden: true
    };
  }

  onSeeMoreClick = () => {
    this.setState({ OverlayHidden: false });
  };

  render() {
    if (this.state.OverlayHidden) {
      return <div></div>;
    }
    return (
      <div className='work-overlay-container'>
        <div className='work-overlay' onClick={this.onSeeMoreClick}></div>
      </div>
    );
  }
}

export default WorkOverlay;

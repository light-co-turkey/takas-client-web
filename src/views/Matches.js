import React, { Component } from 'react';

import './styles/matches.scss';

export class Matches extends Component {
  constructor (props) {
		super(props);
    this.state = {
      status: "Aktif",
      title: "Title"
  };
	}
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div className='matched-frame'>
          <span className='status-indicator'>{this.state.status}</span>
          <span className='item-title'>{this.state.title}</span>
          <span className='img-frame'></span>
          <span className='matcher'></span>
          <span className='img-frame'></span>
          <span className='item-title'>{this.state.title}</span>
          <span className='chat-btn'></span>
        </div>
      </div>
    );
  }
}

export default Matches;

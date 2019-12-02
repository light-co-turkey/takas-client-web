import React, { Component } from 'react';
import match_arrows from '../shared/images/match_arrows.png'
import arrow_left from '../shared/images/arrow_left.png'
import arrow_right from '../shared/images/arrow_right.png'

import './styles/home.scss'

export class Home extends Component {
  constructor (props) {
    super(props);
    this.state = { matchCount: 0 };
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <span className='edit_create_frame'>
          <a className='button' id='edit' href="/edit-product/">
            <h3 style={{ margin: 'auto' }}>Düzenle</h3>
          </a>
          <a href='/create-product/' className='button' id='create'>
            <h3 style={{ margin: 'auto' }}>Yarat</h3>
          </a>
        </span>

        <span className='img_prev_frame' id='img_left'>
          <span className='img_prev_title_frame'></span>
          <button className='img_left_button'><img id='arrow-btn' src={arrow_left} alt={arrow_left} /></button>
          <button className='img_right_button'><img id='arrow-btn' src={arrow_right} alt={arrow_right} /></button>
        </span>
        <span className='list_frame' id='list_left'></span>

        <img src={match_arrows} alt={match_arrows} className='match_arrows' />

        <span className='img_prev_frame' id='img_right'>
          <span className='img_prev_title_frame'></span>
          <button className='img_left_button'><img id='arrow-btn' src={arrow_left} alt={arrow_left} /></button>
          <button className='img_right_button'><img id='arrow-btn' src={arrow_right} alt={arrow_right} /></button>
        </span>
        <span className='list_frame' id='list_right'></span>

        <button className='button' id='match'><h3 style={{ margin: 'auto' }}>Eşle</h3></button>

        <a href='/matches/'>
          <div className='matches'>
            <span className='matches-count'>{this.state.matchCount}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default Home;

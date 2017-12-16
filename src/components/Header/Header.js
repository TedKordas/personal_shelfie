import React, { Component } from 'react';
import './Header.css';
import logo from './logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header-content'>
          <img src={ logo } alt="DevMountain Logo"/>
          <span className='Header-text'>SHELFIE</span>
        </div>
      </div>
    );
  }
}
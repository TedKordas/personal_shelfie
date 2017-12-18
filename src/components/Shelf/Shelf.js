import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class  extends Component {
  constructor() {
    super()
    this.state = {
      bins: [{},{},{},{},{}]
    }
  }

  render() {
    return (
      <div>SHOW ME THE MONEY</div>
    );
  }
}
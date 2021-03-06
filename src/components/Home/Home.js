import React, { Component } from 'react';
import { Link, Route } from'react-router-dom';
import Shelf from '../Shelf/Shelf';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      shelves: ['A', 'B', 'C', 'D']
    }
  }

  render() {
    const { shelves } = this.state
    let shelf = shelves.map((el, i) => 
      <div className='Home-shelf-container'>
        <Link to={`/bins/${el}`} key={i}>
          <span>Shelf {el}</span>
        </Link>
      </div> )
    return (
      <div className='Home-shelves-container'>
        <Route exact path="/" render={() => shelf }/>
        <Route path="/bins/:id" component={ <Shelf /> } />
      </div>
    );
  }
}


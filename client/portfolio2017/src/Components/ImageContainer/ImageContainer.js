import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { Contratanos, AoDesarrollo } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

class ImageContainer extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div className="ImageContainer">
        <h1 className="ImageContainer__main-text">
          {lenguajeSelector(lenguaje, AoDesarrollo)}
        </h1>
        <span className="ImageContainer__secondary-text">
          The sky's the limit
        </span>
        <Link to={'/contact'}>
          <a className="btn btn--white btn--animated ImageContainer__btn">
            {lenguajeSelector(lenguaje, Contratanos)}
          </a>
        </Link>
      </div>
    );
  }
}

export default GlobalsConnect(ImageContainer);

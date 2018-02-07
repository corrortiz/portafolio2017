// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//HOC for global states
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//locale
import { lenguajeSelector } from '../../Store/Actions/globals';
import { Contratanos, AoDesarrollo } from '../../Assets/diccionary';

/**
 * Component for a call to action with a Full Wide Image and A Message
 */
export class ImageContainer extends Component {
  handleClick = () => {
    this.props.setTabValue(3);
  };

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

        <Link to="/contact">
          <button
            className="btn btn--white btn--animated ImageContainer__btn"
            onClick={this.handleClick}
          >
            {lenguajeSelector(lenguaje, Contratanos)}
          </button>
        </Link>
      </div>
    );
  }
}

export default GlobalsConnect(ImageContainer);

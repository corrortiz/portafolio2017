import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { Contratanos, AoDesarrollo } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

class TwoColumPresentation extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div className="TwoColumPresentation box">
        <div className="TwoColumPresentation__one">
          <h1 className="TwoColumPresentation__one__title">
            {lenguajeSelector(lenguaje, Contratanos)}
          </h1>
          <p className="TwoColumPresentation__one__text">
            {lenguajeSelector(lenguaje, AoDesarrollo)}
          </p>
        </div>
        <div className="TwoColumPresentation__two" />
      </div>
    );
  }
}

export default GlobalsConnect(TwoColumPresentation);

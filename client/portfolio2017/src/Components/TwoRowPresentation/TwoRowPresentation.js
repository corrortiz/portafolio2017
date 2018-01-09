import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { Meta, MetaText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

import Logo from '../../images/SVG/Logo';

class TwoRowPresentation extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div>
        <div className="TwoRowPresentation box">
          <div className="TwoRowPresentation__one">
            <Logo />
          </div>
          <div className="TwoRowPresentation__two">
            <h1 className="TwoRowPresentation__two__title">
              {lenguajeSelector(lenguaje, Meta)}
            </h1>
            <p className="TwoRowPresentation__two__text">
              {lenguajeSelector(lenguaje, MetaText)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalsConnect(TwoRowPresentation);

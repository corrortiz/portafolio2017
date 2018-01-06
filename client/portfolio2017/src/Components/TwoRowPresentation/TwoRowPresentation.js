import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { SofwareDevelop, SofwareDevelopText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

import Logo from '../../images/SVG/Logo';

class TwoRowPresentation extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div className="TwoRowPresentation box">
        <div className="TwoRowPresentation__one">
          <Logo />
        </div>
        <div className="TwoRowPresentation__two">
          <h1 className="TwoRowPresentation__two__title">
            {lenguajeSelector(lenguaje, SofwareDevelop)}
          </h1>
          <p className="TwoRowPresentation__two__text">
            {lenguajeSelector(lenguaje, SofwareDevelopText)}
          </p>
        </div>
      </div>
    );
  }
}

export default GlobalsConnect(TwoRowPresentation);

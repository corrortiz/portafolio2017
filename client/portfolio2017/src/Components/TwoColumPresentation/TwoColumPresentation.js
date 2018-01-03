// @flow
import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { SofwareDevelop, SofwareDevelopText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

class TwoColumPresentation extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div className="TwoColumPresentation box">
        <div className="TwoColumPresentation__one">
          <h1 className="TwoColumPresentation__one__title">
            {lenguajeSelector(lenguaje, SofwareDevelop)}
          </h1>
          <p className="TwoColumPresentation__one__text">
            {lenguajeSelector(lenguaje, SofwareDevelopText)}
          </p>
        </div>
        <div className="TwoColumPresentation__two" />
      </div>
    );
  }
}

export default GlobalsConnect(TwoColumPresentation);

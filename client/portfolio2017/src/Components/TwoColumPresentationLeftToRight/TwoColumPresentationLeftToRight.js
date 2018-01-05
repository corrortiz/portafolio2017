// @flow
import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { WebDev, WebDevText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

class TwoColumPresentationLeftToRight extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div className="TwoColumPresentationLeftToRight box ">
        <div className="TwoColumPresentationLeftToRight__two AnimationBorder" />
        <div className="TwoColumPresentationLeftToRight__one">
          <h1 className="TwoColumPresentationLeftToRight__one__title">
            {lenguajeSelector(lenguaje, WebDev)}
          </h1>
          <p className="TwoColumPresentationLeftToRight__one__text">
            {lenguajeSelector(lenguaje, WebDevText)}
          </p>
        </div>
      </div>
    );
  }
}

export default GlobalsConnect(TwoColumPresentationLeftToRight);

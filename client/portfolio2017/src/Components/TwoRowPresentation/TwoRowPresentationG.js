import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { Meta, MetaText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

import Grid from 'material-ui/Grid';

import Logo from '../../images/SVG/Logo';

class TwoRowPresentationG extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div>
        <Grid container spacing={8} className="TwoRowPresentationG">
          <Grid item xs={12} className="TwoRowPresentationG__one">
            <Logo />
          </Grid>
          <Grid item xs={12} className="TwoRowPresentationG__two">
            <h1 className="TwoRowPresentationG__two__title">
              {lenguajeSelector(lenguaje, Meta)}
            </h1>
            <p className="TwoRowPresentationG__two__text">
              {lenguajeSelector(lenguaje, MetaText)}
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GlobalsConnect(TwoRowPresentationG);

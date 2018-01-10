// @flow
import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { SofwareDevelop, SofwareDevelopText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

import Grid from 'material-ui/Grid';

class TwoColumPresentation extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <Grid
        container
        spacing={8}
        alignItems={'center'}
        justify={'center'}
        alignContent={'center'}
        className="TwoColumPresentation box"
      >
        <Grid item xs={12} lg={6} className="TwoColumPresentation__one">
          <h1 className="TwoColumPresentation__one__title">
            {lenguajeSelector(lenguaje, SofwareDevelop)}
          </h1>
          <p className="TwoColumPresentation__one__text">
            {lenguajeSelector(lenguaje, SofwareDevelopText)}
          </p>
        </Grid>
        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={6}
          className="TwoColumPresentation__two"
        >
          <div className="TwoColumPresentation__two__image AnimationBorder" />
        </Grid>
      </Grid>
    );
  }
}

export default GlobalsConnect(TwoColumPresentation);

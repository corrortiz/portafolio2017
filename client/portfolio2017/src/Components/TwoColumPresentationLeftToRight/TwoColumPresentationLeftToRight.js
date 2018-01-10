// @flow
import React, { Component } from 'react';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
import { WebDev, WebDevText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';

import Grid from 'material-ui/Grid';

class TwoColumPresentationLeftToRight extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <Grid
        container
        spacing={8}
        alignItems={'center'}
        justify={'center'}
        alignContent={'center'}
        className="TwoColumPresentationLeftToRight box"
      >
        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={6}
          className="TwoColumPresentationLeftToRight__two"
        >
          <div className="TwoColumPresentationLeftToRight__two__image AnimationBorder" />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          className="TwoColumPresentationLeftToRight__one"
        >
          <h1 className="TwoColumPresentationLeftToRight__one__title">
            {lenguajeSelector(lenguaje, WebDev)}
          </h1>
          <p className="TwoColumPresentationLeftToRight__one__text">
            {lenguajeSelector(lenguaje, WebDevText)}
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default GlobalsConnect(TwoColumPresentationLeftToRight);

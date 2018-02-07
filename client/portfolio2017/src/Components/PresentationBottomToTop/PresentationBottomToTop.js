import React, { Component } from 'react';
//HOC for global script
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//Locale
import { lenguajeSelector } from '../../Store/Actions/globals';
import { Meta, MetaText } from '../../Assets/diccionary';
//MUI Component
import Grid from 'material-ui/Grid';
//Internal Component
import Logo from '../../images/SVG/Logo';

/**
 * This class represents a common section of two rows
 * one with information and the other with image botton right to top
 */
export class PresentationBottomToTop extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <div>
        <Grid container spacing={8} className="PresentationBottomToTop">
          <Grid item xs={12} className="PresentationBottomToTop__one">
            <Logo />
          </Grid>
          <Grid item xs={12} className="PresentationBottomToTop__two">
            <h1 className="PresentationBottomToTop__two__title">
              {lenguajeSelector(lenguaje, Meta)}
            </h1>
            <p className="PresentationBottomToTop__two__text">
              {lenguajeSelector(lenguaje, MetaText)}
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GlobalsConnect(PresentationBottomToTop);

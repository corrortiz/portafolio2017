// @flow
import React, { Component } from 'react';
//HOC global store
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//Locale selectors
import { lenguajeSelector } from '../../Store/Actions/globals';
import { WebDev, WebDevText } from '../../Assets/diccionary';
//MUI Controls
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
//CSS in JS Styles
const styles = theme => ({
  root: {}
});

/**
 * This class represents a common section of two columns
 * one with information and the other with image from left to right
 */
export class PresentationLeftToRight extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    const { classes } = this.props;

    return (
      <Grid
        container
        spacing={8}
        alignItems={'center'}
        justify={'center'}
        alignContent={'center'}
        className={`PresentationLeftToRight box ${classes.root}`}
      >
        {/*Image*/}
        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={6}
          className="PresentationLeftToRight__two"
        >
          <div className="PresentationLeftToRight__two__image AnimationBorder" />
        </Grid>

        {/*Information text*/}
        <Grid item xs={12} lg={6} className="PresentationLeftToRight__one">
          <h1 className="PresentationLeftToRight__one__title">
            {lenguajeSelector(lenguaje, WebDev)}
          </h1>
          <p className="PresentationLeftToRight__one__text">
            {lenguajeSelector(lenguaje, WebDevText)}
          </p>
        </Grid>
      </Grid>
    );
  }
}

PresentationLeftToRight = withStyles(styles)(PresentationLeftToRight);

export default GlobalsConnect(PresentationLeftToRight);

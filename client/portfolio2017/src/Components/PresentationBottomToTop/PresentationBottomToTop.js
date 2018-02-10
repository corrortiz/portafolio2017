import React, { Component } from 'react';
import PropTypes from 'prop-types';
//HOC for global script
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//Locale
import { lenguajeSelector } from '../../Store/Actions/globals';
import { Meta, MetaText } from '../../Assets/diccionary';
//MUI Component
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
//Internal Component
//import Logo from '../../images/SVG/Logo';
import AnimeExport from '../../images/Anime';
//CSS in JS Styles
const styles = theme => ({
  root: {}
});

/**
 * This class represents a common section of two rows
 * one with information and the other with image botton right to top
 */
export class PresentationBottomToTop extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={8} className="PresentationBottomToTop">
          <Grid item xs={12} className="PresentationBottomToTop__one">
            <AnimeExport />
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

PresentationBottomToTop.propTypes = {
  globals: PropTypes.shape({
    lenguaje: PropTypes.string.isRequired
  })
};

PresentationBottomToTop = withStyles(styles)(PresentationBottomToTop);

export default GlobalsConnect(PresentationBottomToTop);

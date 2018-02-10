import React, { Component } from 'react';
import PropTypes from 'prop-types';
//HOC global store
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//Locale selectors
import { lenguajeSelector } from '../../Store/Actions/globals';
import { WebDev, WebDevText } from '../../Assets/diccionary';
//MUI Controls
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
//Internal Componetns
import RImage from '../RImage/RImage';
//Responsive Images
import lg_1x_JPG from '../../images/WebDev/WebDev-lg_1x.jpg';
import md_1x_JPG from '../../images/WebDev/WebDev-md_1x.jpg';
import sm_1x_JPG from '../../images/WebDev/WebDev-sm_1x.jpg';
//Only Chrome
import lg_1x from '../../images/WebDev/WebDev-lg_1x.webp';
import lg_2x from '../../images/WebDev/WebDev-lg_2x.webp';
import md_1x from '../../images/WebDev/WebDev-md_1x.webp';
import md_2x from '../../images/WebDev/WebDev-md_2x.webp';
import sm_1x from '../../images/WebDev/WebDev-sm_1x.webp';
import sm_2x from '../../images/WebDev/WebDev-sm_2x.webp';
import AOS from 'aos';
//CSS in JS Styles
const styles = theme => ({
  root: {}
});

/**
 * This class represents a common section of two columns
 * one with information and the other with image from left to right
 */
export class PresentationLeftToRight extends Component {
  componentDidMount() {
    this.initAnimation();
  }

  initAnimation = () =>
    AOS.init({ duration: 400, delay: 100, easing: 'ease-in-sine' });

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
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className="PresentationLeftToRight__two"
          data-aos="zoom-in-left"
        >
          <RImage
            lg_1x={lg_1x}
            lg_2x={lg_2x}
            md_1x={md_1x}
            md_2x={md_2x}
            sm_1x={sm_1x}
            sm_2x={sm_2x}
            lg_1x_JPG={lg_1x_JPG}
            md_1x_JPG={md_1x_JPG}
            sm_1x_JPG={sm_1x_JPG}
            rightToLeft={false}
            className="PresentationLeftToRight__two__image"
          />
        </Grid>

        {/*Information text*/}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          className="PresentationLeftToRight__one"
        >
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

PresentationLeftToRight.propTypes = {
  globals: PropTypes.shape({
    lenguaje: PropTypes.string.isRequired
  })
};

PresentationLeftToRight = withStyles(styles)(PresentationLeftToRight);

export default GlobalsConnect(PresentationLeftToRight);

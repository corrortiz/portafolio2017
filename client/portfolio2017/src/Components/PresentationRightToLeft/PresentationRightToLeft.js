// @flow
import React, { Component } from 'react';
//HOC
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//Local Diccionary
import { SofwareDevelop, SofwareDevelopText } from '../../Assets/diccionary';
import { lenguajeSelector } from '../../Store/Actions/globals';
//MUI Components
import Grid from 'material-ui/Grid';
//Internal Componetns
import RImage from '../RImage/RImage';
//Responsive Images
import lg_1x_JPG from '../../images/Programing/Programing-lg_1x.jpg';
import md_1x_JPG from '../../images/Programing/Programing-md_1x.jpg';
import sm_1x_JPG from '../../images/Programing/Programing-sm_1x.jpg';
//Only Chrome
import lg_1x from '../../images/Programing/Programing-lg_1x.webp';
import lg_2x from '../../images/Programing/Programing-lg_2x.webp';
import md_1x from '../../images/Programing/Programing-md_1x.webp';
import md_2x from '../../images/Programing/Programing-md_2x.webp';
import sm_1x from '../../images/Programing/Programing-sm_1x.webp';
import sm_2x from '../../images/Programing/Programing-sm_2x.webp';

/**
 * This class represents a common section of two columns
 * one with information and the other with image from right to left
 */
export class PresentationRightToLeft extends Component {
  render() {
    const { lenguaje } = this.props.globals;
    return (
      <Grid
        container
        spacing={8}
        alignItems={'center'}
        justify={'center'}
        alignContent={'center'}
        className="PresentationRightToLeft box"
      >
        <Grid item xs={12} lg={6} className="PresentationRightToLeft__one">
          <h1 className="PresentationRightToLeft__one__title">
            {lenguajeSelector(lenguaje, SofwareDevelop)}
          </h1>
          <p className="PresentationRightToLeft__one__text">
            {lenguajeSelector(lenguaje, SofwareDevelopText)}
          </p>
        </Grid>

        <Grid
          item
          xs={10}
          sm={6}
          md={6}
          lg={6}
          className="PresentationRightToLeft__two"
        >
          <div className="PresentationRightToLeft__two__image">
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
            />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default GlobalsConnect(PresentationRightToLeft);

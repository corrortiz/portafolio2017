/* eslint-disable */
// @flow
import React, { Component } from 'react';

/**
 * Component to receive images and be responsive
 */
class RImage extends Component {
  render() {
    const {
      lg_1x,
      lg_2x,
      md_1x,
      md_2x,
      sm_1x,
      sm_2x,
      lg_1x_JPG,
      md_1x_JPG,
      sm_1x_JPG
    } = this.props;

    return (
      <picture>
        <source
          media="(min-width: 900px)"
          srcSet={`${lg_1x} 1x, ${lg_2x} 2x`}
          type="image/webp"
        />
        <source
          media="(min-width: 601px)"
          srcSet={`${md_1x} 1x, ${md_2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${sm_1x} 1x, ${sm_2x} 2x`} type="image/webp" />
        <img
          srcSet={`${sm_1x_JPG} 600w,
            ${md_1x_JPG} 900w,
            ${lg_1x_JPG} 1440w`}
          src={lg_1x_JPG}
          type="image/jpeg"
          alt="image description"
        />
      </picture>
    );
  }
}

export default RImage;

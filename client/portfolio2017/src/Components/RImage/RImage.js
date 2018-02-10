/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Component to receive images and be responsive
 */
export class RImage extends Component {
  /**
   * Change the direction of the arrow in css
   */
  cssSelectorChange = rightToLeft => {
    return rightToLeft ? 'rImageRight' : 'rImageLeft';
  };

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
      sm_1x_JPG,
      rightToLeft //if true rigth arrow if false left arrow
    } = this.props;

    return (
      <picture className={this.cssSelectorChange(rightToLeft)}>
        <source
          media="(min-width: 900px)"
          srcSet={`${lg_1x} 1x, ${lg_2x} 2x`}
          type="image/webp"
          className={`${this.cssSelectorChange(rightToLeft)}__image`}
        />

        <source
          media="(min-width: 601px)"
          srcSet={`${md_1x} 1x, ${md_2x} 2x`}
          type="image/webp"
          className={`${this.cssSelectorChange(rightToLeft)}__image`}
        />

        <source
          srcSet={`${sm_1x} 1x, ${sm_2x} 2x`}
          type="image/webp"
          className={`${this.cssSelectorChange(rightToLeft)}__image`}
        />

        <img
          srcSet={`${sm_1x_JPG} 600w,
            ${md_1x_JPG} 900w,
            ${lg_1x_JPG} 1440w`}
          src={lg_1x_JPG}
          type="image/jpeg"
          alt="image description"
          className={`${this.cssSelectorChange(rightToLeft)}__image`}
        />
        <div className={`${this.cssSelectorChange(rightToLeft)}__shadow`} />
      </picture>
    );
  }
}

RImage.propTypes = {
  lg_1x: PropTypes.string.isRequired,
  lg_2x: PropTypes.string.isRequired,
  md_1x: PropTypes.string.isRequired,
  md_2x: PropTypes.string.isRequired,
  sm_1x: PropTypes.string.isRequired,
  sm_2x: PropTypes.string.isRequired,
  lg_1x_JPG: PropTypes.string.isRequired,
  md_1x_JPG: PropTypes.string.isRequired,
  sm_1x_JPG: PropTypes.string.isRequired,
  rightToLeft: PropTypes.bool.isRequired
};

export default RImage;

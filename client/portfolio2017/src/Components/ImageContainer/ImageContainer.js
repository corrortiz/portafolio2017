import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//MUI Components
import { withStyles } from 'material-ui/styles';
//HOC for global states
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//locale
import { lenguajeSelector } from '../../Store/Actions/globals';
import { Contratanos, AoDesarrollo } from '../../Assets/diccionary';
//CSS in JS Styles
const styles = theme => ({
  root: {}
});

/**
 * Component for a call to action with a Full Wide Image and A Message
 */
export class ImageContainer extends Component {
  handleClick = () => {
    this.props.setTabValue(3);
  };

  render() {
    const { lenguaje } = this.props.globals;
    const { classes } = this.props;

    return (
      <div className={`ImageContainer ${classes.root}`}>
        <div className="ImageContainer__header">
          <h1 className="ImageContainer__main-text">
            {lenguajeSelector(lenguaje, AoDesarrollo)}
          </h1>

          <span className="ImageContainer__secondary-text">
            The sky's the limit
          </span>
        </div>
        <Link to="/contact">
          <button
            className="btn btn--white btn--animated ImageContainer__btn"
            onClick={this.handleClick}
          >
            {lenguajeSelector(lenguaje, Contratanos)}
          </button>
        </Link>
      </div>
    );
  }
}

ImageContainer.propTypes = {
  globals: PropTypes.shape({
    lenguaje: PropTypes.string.isRequired
  })
};

ImageContainer = withStyles(styles)(ImageContainer);

export default GlobalsConnect(ImageContainer);

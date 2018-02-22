import React, { Component } from 'react';
import PropTypes from 'prop-types';
//MUI Components
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import { withStyles } from 'material-ui/styles';
//HOC for connect to Redux
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//locale neds of global connect to work
import { lenguajeSelector } from '../../Store/Actions/globals';
import { Close } from '../../Assets/diccionary';

//Func for deside te type of transiton to the sbackbar
function TypeOfTransition(props) {
  return <Slide direction="up" {...props} />;
}
//CSS in JS style
const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

/**
 * SnackBar component with auto hide and animation
 */
export class AppSnackBar extends Component {
  state = {
    transition: TypeOfTransition
  };

  handleClick = transition => () => {
    this.props.showSnackBar();
    this.setState({ transition });
  };

  handleClose = () => {
    this.props.showSnackBar();
  };

  render() {
    const { transition } = this.state;
    const { openSnackBar, messageSnackBar, lenguaje } = this.props.globals;
    const { classes } = this.props;

    return (
      <div className="footer__appSnackBar">
        {/*This button is necesary for adding the custom transition and is hidden with css*/}
        <Button className="hide" onClick={this.handleClick(TypeOfTransition)}>
          Down
        </Button>

        <Snackbar
          open={openSnackBar}
          onClose={this.handleClose}
          autoHideDuration={3500}
          transition={transition}
          className={classes.snackbar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{messageSnackBar}</span>}
          action={[
            <Button
              key="close"
              aria-label="Close"
              color="secondary"
              onClick={this.handleClose}
            >
              {lenguajeSelector(lenguaje, Close)}
            </Button>
          ]}
        />
      </div>
    );
  }
}

AppSnackBar.propTypes = {
  globals: PropTypes.shape({
    openSnackBar: PropTypes.bool.isRequired,
    messageSnackBar: PropTypes.string.isRequired,
    lenguaje: PropTypes.string.isRequired
  })
};

AppSnackBar = withStyles(styles)(AppSnackBar);

export default GlobalsConnect(AppSnackBar);

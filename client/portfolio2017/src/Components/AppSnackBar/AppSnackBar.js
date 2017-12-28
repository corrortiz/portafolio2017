import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';

function TransitionDown(props) {
  return <Slide direction="down" {...props} />;
}

class AppSnackBar extends Component {
  state = {
    transition: TransitionDown
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
    const { openSnackBar, messageSnackBar } = this.props.globals;

    return (
      <div className="footer__appSnackBar">
        <Button onClick={this.handleClick(TransitionDown)}>Down</Button>
        <Snackbar
          open={openSnackBar}
          onClose={this.handleClose}
          onRequestClose={this.handleClose}
          autoHideDuration={1000}
          transition={transition}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{messageSnackBar}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default GlobalsConnect(AppSnackBar);

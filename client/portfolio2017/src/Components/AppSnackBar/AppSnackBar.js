import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

function TransitionDown(props) {
  return <Slide direction="down" {...props} />;
}

class AppSnackBar extends Component {
  state = {
    open: false,
    transition: null
  };

  handleClick = transition => () => {
    this.setState({ open: true, transition });
  };

  handleClose = () => {
    this.setState(() => ({ open: false }));
  };

  render() {
    const { open, transition } = this.state;
    const { message } = this.props;

    return (
      <div>
        <Button onClick={this.handleClick(TransitionDown)}>Down</Button>
        <Snackbar
          open={open}
          onClose={this.handleClose}
          onRequestClose={this.handleClose}
          transition={transition}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{message}</span>}
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

export default AppSnackBar;

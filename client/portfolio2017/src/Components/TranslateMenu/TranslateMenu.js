// @flow
import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Translate from 'material-ui-icons/Translate';

class TranslateMenu extends Component {
  state = {
    anchorEl: null,
    open: false,
    lenguaje: 'Español'
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ open: false, lenguaje: event.currentTarget.id });
  };

  render() {
    return (
      <div className="header__translate-menu">
        <Button
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.state.lenguaje}
        </Button>
        <Translate
          onClick={this.handleClick}
          className="header__translate-menu__icon"
        />
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} id="ESPAÑOL">
            Español
          </MenuItem>
          <MenuItem onClick={this.handleClose} id="ENGLISH">
            English
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default TranslateMenu;

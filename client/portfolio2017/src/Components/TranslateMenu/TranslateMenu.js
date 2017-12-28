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
    const anchorEl = event.currentTarget;
    this.setState(() => ({ open: true, anchorEl }));
  };

  handleClose = event => {
    const lenguaje = event.currentTarget.id;
    this.setState(() => ({ open: false, lenguaje }));
  };

  render() {
    const { open, anchorEl, lenguaje } = this.state;

    return (
      <div className="header__translate-menu">
        <Button
          aria-owns={open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {lenguaje}
        </Button>
        <Translate
          onClick={this.handleClick}
          className="header__translate-menu__icon"
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
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

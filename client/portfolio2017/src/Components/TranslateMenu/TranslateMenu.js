// @flow
import React, { Component } from 'react';
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Translate from 'material-ui-icons/Translate';

class TranslateMenu extends Component {
  state = {
    anchorEl: null,
    open: false,
    lenguaje: 'ENGLISH'
  };

  handleClick = event => {
    const anchorEl = event.currentTarget;
    this.setState(() => ({ open: true, anchorEl }));
  };

  handleClose = event => {
    this.props.showLoading();
    const lenguaje = event.currentTarget.id;
    this.setState(() => ({ open: false, lenguaje }));
    this.kiri = setTimeout(() => {
      //Action Redux Store
      lenguaje === 'ESPAÑOL'
        ? this.props.setLenguaje('es')
        : this.props.setLenguaje('en');
      this.props.messageSnackBar('The Language Of The Page Has Changed');
      this.props.showSnackBar();
      this.props.showLoading();
    }, 1000);
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
          <MenuItem onClick={this.handleClose} id="ENGLISH">
            English
          </MenuItem>
          <MenuItem onClick={this.handleClose} id="ESPAÑOL">
            Español
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default GlobalsConnect(TranslateMenu);

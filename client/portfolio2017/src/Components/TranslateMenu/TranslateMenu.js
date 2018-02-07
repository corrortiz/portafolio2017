import React, { Component } from 'react';
import PropTypes from 'prop-types';
//MUI Componets
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Translate from 'material-ui-icons/Translate';
//HOC for globals states
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//local
import { lenguajeSelector } from '../../Store/Actions/globals';
import { LocaleChange } from '../../Assets/diccionary';

/**
 * A choice box component for changing the local of the app
 */
export class TranslateMenu extends Component {
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
    //Show Loading circle
    this.props.showLoading();
    //Change the state for the new value in the choice box
    const lenguaje = event.currentTarget.id;
    this.setState(() => ({ open: false, lenguaje }));
    //Translate into locale short name
    const newLocale = lenguaje === 'ESPAÑOL' ? 'es' : 'en';
    //A small dealy for better UX
    this.anyName = setTimeout(() => {
      this.props.setLenguaje(newLocale);
      //This change the snackbar message
      this.props.messageSnackBar(lenguajeSelector(newLocale, LocaleChange));
      this.props.showSnackBar();
      this.props.showLoading();
    }, 550);
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

TranslateMenu.propTypes = {
  globals: PropTypes.shape({
    showLoading: PropTypes.bool.isRequired,
    messageSnackBar: PropTypes.string.isRequired,
    lenguaje: PropTypes.string.isRequired
  })
};

export default GlobalsConnect(TranslateMenu);

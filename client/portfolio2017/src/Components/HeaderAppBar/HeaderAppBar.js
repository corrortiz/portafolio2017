// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

import TabMenu from '../TabMenu/TabMenu';
import TranslateMenu from '../TranslateMenu/TranslateMenu';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';

class HeaderAppBar extends Component {
  render() {
    return (
      <AppBar position="fixed" className="header">
        <Toolbar className="header__toolbar">
          <div className="header__title">
            <Typography
              type="title"
              color="inherit"
              className="header__title__message"
            >
              AO HyS
            </Typography>
            {this.props.globals.showLoading && (
              <CircularProgress
                size={24}
                className="header__title__progress"
                thickness={7}
              />
            )}
          </div>
          <TranslateMenu />
        </Toolbar>
        <TabMenu />
      </AppBar>
    );
  }
}

export default GlobalsConnect(HeaderAppBar);

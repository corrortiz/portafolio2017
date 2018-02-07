import React, { Component } from 'react';
import PropTypes from 'prop-types';
//MUI Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
//Internal Components
import TabMenu from '../TabMenu/TabMenu';
import TranslateMenu from '../TranslateMenu/TranslateMenu';
//HOC for global states
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//CSS in JS
const styles = {
  root: {},
  flex: {},
  menuButton: {}
};

/**
 * Layout component for the header of the app
 */
export class HeaderAppBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className="header" position="static">
          <Toolbar className="header__toolbar">
            <div className="header__title">
              <Typography
                type="title"
                color="inherit"
                className={`header__title__message ${classes.flex}`}
              >
                AO HyS
              </Typography>
              {this.props.globals.showLoading && (
                <CircularProgress
                  size={40}
                  className={`header__title__progress ${classes.menuButton}`}
                  thickness={3}
                />
              )}
            </div>
            <TranslateMenu />
          </Toolbar>
          <TabMenu />
        </AppBar>
      </div>
    );
  }
}

HeaderAppBar.propTypes = {
  globals: PropTypes.shape({
    showLoading: PropTypes.bool.isRequired
  })
};

HeaderAppBar = GlobalsConnect(HeaderAppBar);

export default withStyles(styles)(HeaderAppBar);

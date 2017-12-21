// @flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TabMenu from '../TabMenu/TabMenu';

const HeaderAppBar = () => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="header__toolbar">
        <Typography type="title" color="inherit" className="header__title">
          AO HyS
        </Typography>
      </Toolbar>
      <TabMenu />
    </AppBar>
  );
};

export default HeaderAppBar;

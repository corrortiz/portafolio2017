// @flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SimpleBottomNavigation from '../BottonNavigation/SimpleBottomNavigation';

const HeaderAppBar = () => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="header__toolbar">
        <Typography type="title" color="inherit" className="header__title">
          AO HyS
        </Typography>
        <SimpleBottomNavigation />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;

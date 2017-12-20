// @flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const HeaderAppBar = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography type="title" color="inherit" className="header__title">
          AO HyS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;

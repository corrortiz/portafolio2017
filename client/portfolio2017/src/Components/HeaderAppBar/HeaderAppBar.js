// @flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const HeaderAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          AO HyS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAppBar;

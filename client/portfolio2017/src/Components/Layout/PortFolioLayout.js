// @flow
import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import HeaderAppBar from '../HeaderAppBar/HeaderAppBar';
import FooterApp from '../FooterApp/FooterApp';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
});

const PortfolioLayout = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <HeaderAppBar />
      <FooterApp />
    </MuiThemeProvider>
  );
};

export default PortfolioLayout;

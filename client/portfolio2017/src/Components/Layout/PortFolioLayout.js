// @flow
import React from 'react';

import './PortFolioLayout.css';

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
      <section className="stiky">
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
        <h1>kiri</h1>
      </section>
      <FooterApp />
    </MuiThemeProvider>
  );
};

export default PortfolioLayout;

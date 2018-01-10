// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeConfig from '../../Store/storeConfig';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import deepPurple from 'material-ui/colors/deepPurple';
import Grid from 'material-ui/Grid';

import HeaderAppBar from '../HeaderAppBar/HeaderAppBar';
import FooterApp from '../FooterApp/FooterApp';
import Routs from '../Routs/Routs';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: '#1565c0'
    },
    secondary: {
      ...deepPurple,
      500: '#7e57c2'
    }
  },
  typography: {
    htmlFontSize: 10
  }
});

/**
 * Material UI Theme Wrap
 */
const Layout = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid>
        <Grid item xm={12}>
          <HeaderAppBar />
        </Grid>
        <Grid item xm={12}>
          <section className="section-main">
            <Routs />
          </section>
        </Grid>
        <Grid item xm={12}>
          <FooterApp />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

/*React Router Wrap*/
const RouterWraper = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

/**
 * Redux Store Wrap
 */
const store = storeConfig();

const PortfolioLayout = (
  <Provider store={store}>
    <RouterWraper />
  </Provider>
);

export default PortfolioLayout;

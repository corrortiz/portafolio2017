// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeConfig from '../../Store/storeConfig';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import HeaderAppBar from '../HeaderAppBar/HeaderAppBar';
import FooterApp from '../FooterApp/FooterApp';
import Routs from '../Routs/Routs';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
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
      <div className="container">
        <HeaderAppBar />
        <section className="section-main">
          <Routs />
        </section>
        <FooterApp />
      </div>
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

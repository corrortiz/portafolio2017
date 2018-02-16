import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//Redux Store
import { Provider } from 'react-redux';
import storeConfig from '../../Store/storeConfig';
//MUI Components and Config
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import deepPurple from 'material-ui/colors/deepPurple';
//Internal Components
import HeaderAppBar from '../HeaderAppBar/HeaderAppBar';
import Routs from '../Routs/Routs';
import AppSnackBar from '../AppSnackBar/AppSnackBar';

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
      <div className="layout">
        <HeaderAppBar />
        <section>
          <Routs />
        </section>
        <AppSnackBar />
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

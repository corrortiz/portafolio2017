import * as actions from './globals';

describe('Redux Global ACTIONS', () => {
  test('should set a lenguaje', () => {
    const lenguaje = 'ES';
    const expectedAction = {
      type: actions.SET_LENGUAJE,
      lenguaje
    };
    expect(actions.setLenguaje(lenguaje)).toEqual(expectedAction);
  });

  test('should set a tab value', () => {
    const tabValue = 1;
    const expectedAction = {
      type: actions.SET_TAB_VALUE,
      tabValue
    };
    expect(actions.setTabValue(tabValue)).toEqual(expectedAction);
  });

  test('shoild sent SHOW_SNACKBAR', () => {
    const expectedAction = {
      type: actions.SHOW_SNACKBAR
    };
    expect(actions.showSnackBar()).toEqual(expectedAction);
  });

  test('shoild sent SHOW_LOADING', () => {
    const expectedAction = {
      type: actions.SHOW_LOADING
    };
    expect(actions.showLoading()).toEqual(expectedAction);
  });

  test('should set a message in a snackbar', () => {
    const message = 'AO Rules';
    const expectedAction = {
      type: actions.MESSAGE_SNACKBAR,
      message
    };
    expect(actions.messageSnackBar(message)).toEqual(expectedAction);
  });

  test('should return a english version of a text', () => {
    const Home = {
      es: 'Inicio',
      en: 'Home'
    };
    expect(actions.lenguajeSelector('en', Home)).toEqual(Home.en);
  });

  test('should return a spanish version of a text', () => {
    const Home = {
      es: 'Inicio',
      en: 'Home'
    };
    expect(actions.lenguajeSelector('es', Home)).toEqual(Home.es);
  });
});

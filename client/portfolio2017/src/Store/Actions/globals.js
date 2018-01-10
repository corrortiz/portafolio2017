// @flow

export const SET_LENGUAJE = 'SET_LENGUAJE';
export const setLenguaje = lenguaje => ({
  type: SET_LENGUAJE,
  lenguaje
});

export const SET_TAB_VALUE = 'SET_TAB_VALUE';
export const setTabValue = tabValue => ({
  type: SET_TAB_VALUE,
  tabValue
});

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const showSnackBar = () => ({
  type: SHOW_SNACKBAR
});

export const SHOW_LOADING = 'SHOW_LOADING';
export const showLoading = () => ({
  type: SHOW_LOADING
});

export const MESSAGE_SNACKBAR = 'MESSAGE_SNACKBAR';
export const messageSnackBar = message => ({
  type: MESSAGE_SNACKBAR,
  message
});

export function lenguajeSelector(lenguaje, text) {
  return lenguaje === 'en' ? text.en : text.es;
}

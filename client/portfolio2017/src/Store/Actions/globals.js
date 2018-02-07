// @flow
export const SET_LENGUAJE = 'SET_LENGUAJE';
export const setLenguaje = (lenguaje: string) => ({
  type: SET_LENGUAJE,
  lenguaje
});

export const SET_TAB_VALUE = 'SET_TAB_VALUE';
export const setTabValue = (tabValue: number) => ({
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
export const messageSnackBar = (message: string) => ({
  type: MESSAGE_SNACKBAR,
  message
});

export function lenguajeSelector(lenguaje: string, text: Object) {
  return lenguaje === 'en' ? text.en : text.es;
}

import {
  SET_LENGUAJE,
  SET_TAB_VALUE,
  SHOW_SNACKBAR,
  MESSAGE_SNACKBAR,
  SHOW_LOADING
} from '../Actions/globals';

import reducer from './globals';

describe('Redux Global REDUCER', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      lenguaje: 'en',
      tabValue: 0,
      openSnackBar: false,
      messageSnackBar: '',
      showLoading: false
    });
  });

  it('should set a lenguaje', () => {
    expect(
      reducer([], {
        type: SET_LENGUAJE,
        lenguaje: 'es'
      })
    ).toEqual({
      lenguaje: 'es'
    });
  });

  it('should set a tab value', () => {
    expect(
      reducer([], {
        type: SET_TAB_VALUE,
        tabValue: 1
      })
    ).toEqual({
      tabValue: 1
    });
  });

  it('should change the status of openSnackBar to true', () => {
    expect(
      reducer([], {
        type: SHOW_SNACKBAR
      })
    ).toEqual({
      openSnackBar: true
    });
  });

  it('should change the status of showLoading to true', () => {
    expect(
      reducer([], {
        type: SHOW_LOADING
      })
    ).toEqual({
      showLoading: true
    });
  });

  it('should set a message inside a snackbar', () => {
    expect(
      reducer([], {
        type: MESSAGE_SNACKBAR,
        message: 'AO HyS Rules'
      })
    ).toEqual({
      messageSnackBar: 'AO HyS Rules'
    });
  });
});

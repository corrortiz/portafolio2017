// @flow
import {
  SET_LENGUAJE,
  SHOW_SNACKBAR,
  MESSAGE_SNACKBAR,
  SHOW_LOADING
} from '../Actions/globals';

const GlobalsReducerDefaultState = {
  lenguaje: 'en',
  openSnackBar: false,
  messageSnackBar: '',
  showLoading: false
};

export default (state = GlobalsReducerDefaultState, action) => {
  switch (action.type) {
    case SET_LENGUAJE:
      return {
        ...state,
        lenguaje: action.lenguaje
      };
    case SHOW_SNACKBAR:
      return {
        ...state,
        openSnackBar: !state.openSnackBar
      };
    case MESSAGE_SNACKBAR:
      return {
        ...state,
        messageSnackBar: action.message
      };
    case SHOW_LOADING:
      return {
        ...state,
        showLoading: !state.showLoading
      };
    default:
      return state;
  }
};

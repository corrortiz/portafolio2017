// @flow
import { SET_LENGUAJE } from '../Actions/globals';

const GlobalsReducerDefaultState = {
  lenguaje: 'en'
};

export default (state = GlobalsReducerDefaultState, action) => {
  switch (action.type) {
    case SET_LENGUAJE:
      return {
        ...state,
        lenguaje: action.lenguaje
      };
    default:
      return state;
  }
};

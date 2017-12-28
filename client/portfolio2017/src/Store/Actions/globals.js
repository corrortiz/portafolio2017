// @flow

export const SET_LENGUAJE = 'SET_LENGUAJE';
export const setLenguaje = lenguaje => ({
  type: SET_LENGUAJE,
  lenguaje
});

export function lenguajeSelector(lenguaje, text) {
  return lenguaje === 'en' ? text.en : text.es;
}

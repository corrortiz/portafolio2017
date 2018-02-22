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

export async function sendMail(values: Object) {
  try {
    // eslint-disable-next-line
    const correo = await emailjs.send('default_service', '210682', values).then(
      function(response) {
        console.log(
          'SUCCESS. status=%d, text=%s',
          response.status,
          response.text
        );
      },
      function(err) {
        console.log('FAILED. error=', err);
      }
    );
    console.log(correo);
  } catch (error) {
    throw error;
  }
}

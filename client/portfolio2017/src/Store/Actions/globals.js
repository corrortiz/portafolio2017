import axios from 'axios';
//CONF of Axios
const SENDGRID_URL = 'https://api.sendgrid.com/v3/mail/send';

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
    const correo = await axios.post(
      `${SENDGRID_URL}`,
      {
        personalizations: [
          {
            to: [
              {
                email: 'a.ortizcrr@gmail.com'
              }
            ],
            subject: `Contacto desde AO HyS de ${values.name}`
          }
        ],
        from: {
          email: values.email
        },
        content: [
          {
            type: 'text/plain',
            value: values.content
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_APY_KEY}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With'
        }
      }
    );
    console.log(correo);
  } catch (error) {
    throw error;
  }
}

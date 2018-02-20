import { createStore, combineReducers } from 'redux';
//Redux form agregator
import { reducer as formReducer } from 'redux-form';

import globalsReducer from './Reducers/globals';

export default () => {
  const store = createStore(
    combineReducers({
      globals: globalsReducer,
      form: formReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //left on purpose by anyone who wants to play with the redux store
  );

  return store;
};

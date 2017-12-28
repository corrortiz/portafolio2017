import { createStore, combineReducers } from 'redux';

import globalsReducer from './Reducers/globals';

export default () => {
  const store = createStore(
    combineReducers({
      globals: globalsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

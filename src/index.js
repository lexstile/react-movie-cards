// @flow
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './reducers';
import { APP_STORE_KEY } from './constants';
import { App } from './App';

// тестовые данные
import movies from './stubs/movies.json';
import recommended from './stubs/recommended.json';

const reducers = combineReducers({
  [APP_STORE_KEY]: appReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: 'INITIAL_STATE',
  payload: { movies, recommended },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

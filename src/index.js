// @flow
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { appReducer } from './reducers';
import { APP_STORE_KEY } from './constants';
import { App } from './App';

const reducers = combineReducers({
  [APP_STORE_KEY]: appReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';

import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  reducers,
  applyMiddleware(reduxPromise)
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
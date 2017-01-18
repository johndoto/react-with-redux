import 'babel-polyfill'; // can be reduced in size, by cherry-picking libraries
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; // webpack can import CSS files!

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

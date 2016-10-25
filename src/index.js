import 'babel-polyfill'; // can be reduced in size, by cherry-picking libraries
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; // webpack can import CSS files!

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);

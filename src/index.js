import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import '../src/styles/common.scss';
import '../src/styles/reset.scss';
import '../src/styles/variables.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

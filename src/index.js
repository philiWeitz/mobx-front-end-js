/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import stores, { history } from './mobx/stores';
import Provider from './mobx/provider';


ReactDOM.render(
  <Provider stores={stores} history={history} />,
  document.getElementById('root'),
);

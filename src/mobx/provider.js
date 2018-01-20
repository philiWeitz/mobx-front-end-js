/* global window */

import React from 'react';
import PropTypes from 'prop-types';

import { Router } from 'react-router';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';
import DevTools, { setLogEnabled, setUpdatesEnabled, setGraphEnabled } from 'mobx-react-devtools';


import App from '../modules/app/AppView';


const mobxLoggerConfig = {
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
};


const Root = ({ stores, history }) => {

  const renderDevelopmentProvider = () => {
    // configure the mobX logger
    enableLogging(mobxLoggerConfig);
    // configure mobX dev tools
    setLogEnabled(false);
    setUpdatesEnabled(false);
    setGraphEnabled(false);

    // expose the stores globally for dev purpose
    window.stores = stores;

    return (
      <Provider {...stores}>
        <Router history={history}>
          <div>
            <App />
            <DevTools />
          </div>
        </Router>
      </Provider>
    );
  };

  const renderProductionProvider = () => {
    return (
      <Provider {...stores}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  };

  const renderProvider = () => {
    if (process.env.NODE_ENV !== 'production') {
      return renderDevelopmentProvider();
    }
    return renderProductionProvider();
  };

  return renderProvider();

};


Root.propTypes = {
  stores: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default Root;

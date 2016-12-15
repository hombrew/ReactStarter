import 'babel-polyfill';

// react
import React from 'react';
import {render} from 'react-dom';

// redux
import {Provider} from 'react-redux';
import configureStore from './app/config/store';

// router
import {Router, browserHistory} from 'react-router';
import routes from './app/config/routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);

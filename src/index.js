import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { unregister } from './serviceWorker'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './pages/Dashboard/Dashboard';
import reducers from './reducers'

const store = createStore( reducers, applyMiddleware(thunk))

unregister();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


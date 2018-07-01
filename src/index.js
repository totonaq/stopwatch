import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Stopwatch from './Stopwatch';
import StopwatchApp from './reducers';
import './index.css';

let store = createStore(StopwatchApp)

render(
  <Provider store={store}>
    <Stopwatch />
  </Provider>,
  document.getElementById('countdown')
)

export { store }
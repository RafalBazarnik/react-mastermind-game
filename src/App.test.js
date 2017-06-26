import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers);

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
});

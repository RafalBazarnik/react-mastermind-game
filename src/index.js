import React from 'react';
import { render} from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


let store = createStore(reducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();

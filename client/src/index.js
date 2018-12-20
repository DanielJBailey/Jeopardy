import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Store.js';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

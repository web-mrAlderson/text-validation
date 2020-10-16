import React, { Fragment } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store';


render(
    <Provider store={store}>
        <Fragment>
            <App />
        </Fragment>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();


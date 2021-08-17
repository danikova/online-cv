import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';
import './index.css';

import { createBrowserHistory } from 'history';
import LocaleWrapper from './lang';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

ReactDOM.render(
    <React.StrictMode>
        <LocaleWrapper>
            <CV />
        </LocaleWrapper>
    </React.StrictMode>,
    document.getElementById('root'),
);

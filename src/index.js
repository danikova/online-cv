import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';
import './index.css';

import Moment from 'react-moment';
import 'moment/locale/hu';
import { createBrowserHistory } from 'history';

Moment.globalLocale = 'hu';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

ReactDOM.render(
    <React.StrictMode>
        <CV />
    </React.StrictMode>,
    document.getElementById('root'),
);

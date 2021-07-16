import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';
import './index.css';

import Moment from 'react-moment';
import 'moment/locale/hu';

Moment.globalLocale = 'hu';

ReactDOM.render(
    <React.StrictMode>
        <CV />
    </React.StrictMode>,
    document.getElementById('root'),
);

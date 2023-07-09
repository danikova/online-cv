import React from 'react';
import ReactDOM from 'react-dom';
import CV from './CV';
import './index.css';

import { createBrowserHistory } from 'history';
import LocaleWrapper from './lang';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <LocaleWrapper>
      <CV />
    </LocaleWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

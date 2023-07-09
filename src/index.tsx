import React from 'react';
import { createRoot } from 'react-dom/client';
import CV from './CV';
import './index.css';

import { createBrowserHistory } from 'history';
import LocaleWrapper from './lang';

export const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <LocaleWrapper>
      <CV />
    </LocaleWrapper>
  </React.StrictMode>
);

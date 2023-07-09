import { createRoot } from 'react-dom/client';
import CV from './CV';

import './index.css';

import { createBrowserHistory } from 'history';
import LocaleWrapper from './lang';
import GraidentBg from './GradientBg';

export const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <LocaleWrapper>
    <GraidentBg>
      <CV />
    </GraidentBg>
  </LocaleWrapper>
);

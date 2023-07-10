import { createRoot } from 'react-dom/client';
import CV from './@components/main/CV';

import './index.css';

import { createBrowserHistory } from 'history';
import LocaleWrapper from '@lang';
import GraidentBg from './@components/main/GradientBg';

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

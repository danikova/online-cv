import { createRoot } from 'react-dom/client';

import { createBrowserHistory } from 'history';

import GradientBg from './@components/GradientBg';
import LocaleWrapper from '@lang';
import CV from './@components/CV';

import 'dayjs/locale/hu'
import 'dayjs/locale/en'
import './index.css';

export const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <LocaleWrapper>
    <GradientBg>
      <CV />
    </GradientBg>
  </LocaleWrapper>
);

import { createRoot } from 'react-dom/client';
import CV from './@components/CV';

import { createBrowserHistory } from 'history';
import LocaleWrapper from '@lang';
import GradientBg from './@components/GradientBg';

import './index.css';

import 'dayjs/locale/hu'
import 'dayjs/locale/en'

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

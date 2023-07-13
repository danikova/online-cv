import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from 'history';

import GradientBg from './@components/GradientBg';
import Signature from '@components/Signature';
import LocaleWrapper from '@lang';
import CV from './@components/CV';

import './index.css';

export const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container);

function Index() {
  const [showMain, setShowMain] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 800);
  })

  if (!showMain) return (<GradientBg>
    <div className='w-screen h-screen flex justify-center items-center'>
      <Signature className='w-[70%]' animationSpeed={0.3} />
    </div>
  </GradientBg>)

  return (
    <LocaleWrapper>
      <GradientBg>
        <CV />
      </GradientBg>
    </LocaleWrapper>
  );
}

root.render(<Index />);

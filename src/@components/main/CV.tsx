import '@fontsource/roboto';

import { Profile } from './Profile';
import { Signature } from './Signature';
import { Sections } from '@sections';
import { Actions } from './Actions';
import { useLocale } from '@lang';

function CV() {
  const { locale } = useLocale();

  return (
    <div className='box-border p-24 flex items-center justify-center'>
      <div
        key={locale}
        className='p-12 max-w-[1000px]'
      >
        <Profile />
        <Sections />
        <Signature />
      </div>
      <Actions />
    </div>
  );
}

export default CV;

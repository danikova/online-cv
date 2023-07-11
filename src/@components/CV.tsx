import '@fontsource/roboto';

import { Profile } from './main/Profile';
import { Signature } from './main/Signature';
import { Sections } from './main/sections';
import { Actions } from './main/Actions';
import { useLocale } from '@lang';

function CV() {
  const { locale } = useLocale();

  return (
    <div className='
    box-border p-24 flex items-center justify-center max-lg:p-4 max-md:p-0 max-md:pb-8'>
      <div
        key={locale}
        className='p-12 max-w-[1000px] max-md:p-0 max-md:w-full'
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

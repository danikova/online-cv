import { Profile } from './main/Profile';
import { Footer } from './main/Footer';
import { Sections } from './main/sections';
import { Actions } from './main/Actions';
import { useLocale } from '@lang';

function CV() {
  const { locale } = useLocale();

  return (
    <div className='box-border p-24 flex items-center justify-center max-lg:p-4 max-md:p-0 max-md:pb-8 print:p-0'>
      <div
        key={locale}
        className='fade-in p-12 max-w-[1000px] max-md:p-0 max-md:w-full print:max-w-full print:p-0'
      >
        <Profile />
        <Sections />
        <Footer />
      </div>
      <Actions />
    </div>
  );
}

export default CV;

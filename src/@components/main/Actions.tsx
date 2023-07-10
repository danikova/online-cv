import { createPortal } from 'react-dom';
import { MdTranslate, MdPrint } from 'react-icons/md';
import { supportedLocales, useLocale } from '@lang';

const supportedLocaleKeys = Object.keys(supportedLocales);

function FAB({ children, ...props }) {
  const { className, ...rest } = props;
  return <div className={`
    flex flex-wrap content-center justify-center w-12 h-12 bg-white rounded-full text-black
    md:hover:cursor-pointer md:hover:bg-slate-200/50
    md:mix-blend-screen max-md:bg-primary-800 max-md:text-slate-200
    ${className}
  `}
    {...rest}>
    {children}
  </div>
}

export function Actions() {
  const { locale, selectLanguage } = useLocale();

  return createPortal(
    <>
      <FAB
        onClick={() => {
          const nextLocaleIndex = (supportedLocaleKeys.findIndex((item) => item === locale) + 1) % supportedLocaleKeys.length;
          selectLanguage(supportedLocaleKeys[nextLocaleIndex]);
        }}
        className="fixed right-0 bottom-[calc(4rem)] m-8"
      >
        <MdTranslate className='text-[25px]' />
      </FAB>
      <FAB
        onClick={() => {
          window.print();
        }}
        className="fixed right-0 bottom-0 m-8"
      >
        <MdPrint className='text-[25px]' />
      </FAB>
    </>,
    document.body
  )
}

import { createPortal } from 'react-dom';
import PrintIcon from '@material-ui/icons/Print';
import TranslateIcon from '@material-ui/icons/Translate';
import { supportedLocales, useLocale } from '@lang';

const supportedLocaleKeys = Object.keys(supportedLocales);

function FAB({ children, ...props }) {
  const { className, ...rest } = props;
  return <div className={`
    flex flex-wrap content-center justify-center w-12 h-12 bg-white rounded-full text-black
    hover:cursor-pointer hover:bg-slate-200/50
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
        <TranslateIcon />
      </FAB>
      <FAB
        onClick={() => {
          window.print();
        }}
        className="fixed right-0 bottom-0 m-8"
      >
        <PrintIcon />
      </FAB>
    </>,
    document.body
  )
}

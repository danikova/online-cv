import 'dayjs/locale/hu'
import 'dayjs/locale/en'

import { useContext, useState, createContext } from 'react';
import Cookies from 'js-cookie';

import { IntlProvider } from 'react-intl';

import Hungarian from './hu.json';
import English from './en.json';

const LANG_COOKIE = 'lang.cookie';
const LangContext = createContext<null | any>(null);

export const supportedLocales = {
  hu: {
    messages: Object.assign({}, English, Hungarian),
    visibleName: 'Hu',
    title: 'Önéletrajz - Kovács Daniel - Hu',
  },
  en: {
    messages: English,
    visibleName: 'En',
    title: 'CV - Daniel Kovács - En',
  },
};

const currentLocal = Cookies.get(LANG_COOKIE) || navigator.language.substring(0, 2) || 'hu';
const currentMsgLocale = supportedLocales[currentLocal] || supportedLocales['hu'];
document.title = currentMsgLocale.title;

const LocaleWrapper = (props) => {
  const [locale, setLocale] = useState(currentLocal);
  const [messages, setMessages] = useState(currentMsgLocale.messages);

  function selectLanguage(value) {
    const newLocale = value;
    const newMsgLocale = supportedLocales[newLocale] || supportedLocales['hu'];
    Cookies.set(LANG_COOKIE, newLocale);
    setLocale(newLocale);
    setMessages(newMsgLocale.messages);
    document.title = newMsgLocale.title;
  }

  return (
    <LangContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export default LocaleWrapper;

export function useLocale() {
  const context = useContext(LangContext);
  return {
    locale: context.locale,
    selectLanguage: context.selectLanguage,
  };
}

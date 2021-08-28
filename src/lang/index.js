import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';

import 'moment/locale/hu';
import { IntlProvider } from 'react-intl';

import Hungarian from './hu.json';
import English from './en.json';

// const Hungarian = {};
// const English = {};

const LANG_COOKIE = 'lang.cookie';
const LangContext = React.createContext();

export const supportedLocales = {
    hu: {
        messages: Object.assign({}, English, Hungarian),
        visibleName: 'Hu',
    },
    en: {
        messages: English,
        visibleName: 'En',
    },
};

const currentLocal =
    Cookies.get(LANG_COOKIE) || navigator.language.substring(0, 2) || 'hu';
const currentMsgLocale =
    supportedLocales[currentLocal] || supportedLocales['hu'];
document.title = `CV - Kovács Dániel ${currentMsgLocale.visibleName}`;

const LocaleWrapper = (props) => {
    const [locale, setLocale] = useState(currentLocal);
    const [messages, setMessages] = useState(currentMsgLocale.messages);

    function selectLanguage(value) {
        const newLocale = value;
        const newMsgLocale =
            supportedLocales[newLocale] || supportedLocales['hu'];
        Cookies.set(LANG_COOKIE, newLocale);
        setLocale(newLocale);
        setMessages(newMsgLocale.messages);
        document.title = `CV - Kovács Dániel ${newMsgLocale.visibleName}`;
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

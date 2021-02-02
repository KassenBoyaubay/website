import React, { useContext, useState } from 'react'

import { languageOptions, dictionaryList } from '../languages/languages';

// create the language context with default selected language
export const LanguageContext = React.createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
});

// get text according to id & current language
export function Text({ tid }) {
    const languageContext = useContext(LanguageContext);

    return languageContext.dictionary[tid] || tid;
};

export function useSetLanguage() {
    const languageContext = useContext(LanguageContext);

    return languageContext.userLanguageChange
}

export function useLanguage() {
    const languageContext = useContext(LanguageContext);

    return languageContext.userLanguage
}

// it provides the language context to app
export function LanguageProvider({ children }) {
    const defaultLanguage = window.localStorage.getItem('rcml-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = languageOptions[selected] ? selected : 'en'
            setUserLanguage(newLanguage);
            window.localStorage.setItem('rcml-lang', newLanguage);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};
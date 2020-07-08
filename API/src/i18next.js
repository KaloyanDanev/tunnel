import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languages = ['bg-BG', 'ru'];

i18n
    .use(Backend)

    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        fallbackLng: 'bg-BG',
        debug: false,
        whitelist: languages,

        interpolation: {
            escapeValue: false
        },
    });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslate from './locales/en.json';
import ptTranslate from './locales/pt.json';

i18n.use(initReactI18next).init({
    resources: {
        en: enTranslate,
        pt: ptTranslate,
    },
    lng: 'en',
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;
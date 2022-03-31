import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '@assets/locales/en/translation.json';
import translationUA from '@assets/locales/ua/translation.json';
import translationRU from '@assets/locales/ru/translation.json';

i18n
  // .use(LanguageDetector)
  // .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ua: {
        translation: translationUA
      },
      ru: {
        translation: translationRU
      }
    },
    lng: 'ua',
    fallbackLng: 'ua',
    react: {
      useSuspense: false
    },
    detection: {
      checkWhitelist: true
    },
    keySeparator: '.',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

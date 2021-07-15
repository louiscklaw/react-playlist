import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_js from './en';
import zh_js from './zh';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: en_js,
      zh: zh_js,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

import React from 'react';
import { initReactI18next } from 'react-i18next';

import en_js from './en';
import zh_js from './zh';

import i18n from 'i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: en_js,
      zh: zh_js,
    },
    lng: 'zh',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

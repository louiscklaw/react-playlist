import { initReactI18next } from "react-i18next";

import en_json from './en.json'
import zh_json from './zh.json'

import i18n from "i18next";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: en_json,
      zh: zh_json
    },
    lng: "zh",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

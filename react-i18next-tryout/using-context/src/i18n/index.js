import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGE_PREF_KEY } from 'src/constants';

import en from './en';
import fr from './fr';
import zh_TW from 'src/i18n/zh_TW';

const resources = { en, fr, zh_TW };

const stored_language_pref = localStorage.getItem(LANGUAGE_PREF_KEY);

const locale = stored_language_pref || navigator.language;

console.log('i18n', 'locale', locale);

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  interpolation: { escapeValue: false },
});

export default i18n;

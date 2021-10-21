import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGE_PREF_KEY } from 'src/constants';

import en from './en';
import fr from './fr';

const resources = { en, fr };

const stored_language_pref = localStorage.getItem(LANGUAGE_PREF_KEY);

const locale = stored_language_pref || navigator.language;

console.log('i18n', 'locale', locale);

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  interpolation: { escapeValue: false },
});

export default i18n;

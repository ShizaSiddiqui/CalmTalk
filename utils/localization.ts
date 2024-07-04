import { I18nManager } from 'react-native';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en = require('../../locales/en.json');
const ar = require('../../locales/ar.json');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    lng: I18nManager.isRTL ? 'ar' : 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

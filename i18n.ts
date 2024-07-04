// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';

import en from './src/locales/en.json';
import ar from './src/locales/ar.json';

// Language detector
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const savedDataJSON = await AsyncStorage.getItem('user-language');
    const lng = savedDataJSON ? savedDataJSON : null;
    const selectLanguage = lng || 'en';
    callback(selectLanguage);
  },
  init: () => {},
  cacheUserLanguage: async (lng) => {
    await AsyncStorage.setItem('user-language', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    compatibilityJSON: 'v3', // Add this line to specify compatibility mode
    react: {
      useSuspense: false,
    },
  });

export default i18n;

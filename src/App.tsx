import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { I18nManager, LogBox } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import AppNavigator from './navigation/AppNavigator';
import 'intl';
import 'intl/locale-data/jsonp/en'; // Import the locale you need
import 'intl/locale-data/jsonp/ar'; // Import the Arabic locale if needed
import 'intl-pluralrules';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
const App = () => {
  useEffect(() => {
    const setI18nConfig = async () => {
      const savedDataJSON = await AsyncStorage.getItem('user-language');
      const languageTag = savedDataJSON || 'en';
      const isRTL = languageTag === 'ar';

      I18nManager.forceRTL(isRTL);
      I18nManager.allowRTL(isRTL);

      await i18n.changeLanguage(languageTag);

      if (I18nManager.isRTL !== isRTL) {
        RNRestart.restart();
      }
    };

    setI18nConfig();
  }, []);

  LogBox.ignoreAllLogs(); // Ignore all log notifications

  return (
    <I18nextProvider i18n={i18n}>
      <AppNavigator />
    </I18nextProvider>
  );
};

export default App;

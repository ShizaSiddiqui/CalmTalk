import React from 'react';
import { View, Button, StyleSheet, I18nManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = async (language) => {
    await i18n.changeLanguage(language);
    await AsyncStorage.setItem('user-language', language);

    if (language === 'ar') {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }

    // Reload the app to apply changes
    if (I18nManager.isRTL !== (language === 'ar')) {
      RNRestart.restart();
    }
  };

  return (
    <View style={styles.languageSwitcherContainer}>
      <Button title="English" onPress={() => switchLanguage('en')} />
      <Button title="Arabic" onPress={() => switchLanguage('ar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  languageSwitcherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
});

export default LanguageSwitcher;

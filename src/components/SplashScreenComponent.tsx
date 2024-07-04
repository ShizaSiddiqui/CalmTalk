import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const SplashScreenComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
      navigation.navigate('Intro');
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('../../assets/images/splash.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreenComponent;

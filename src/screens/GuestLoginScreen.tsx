// SignUpScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
// import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import appleAuth, {
//   AppleButton
// } from '@react-native-firebase/apple-auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GuestLoginScreen = () => {
  const [countryCode, setCountryCode] = useState('AE');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.languageContainer}>
        <TouchableOpacity style={styles.languageButton}>
          <Image
            source={{ uri: 'https://restcountries.com/v3.1/all' }} // Use a proper image URL or local image
            style={styles.flagImage}
          />
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/signup-background.png')} // Use a proper image or local image
          style={styles.illustration}
        />
      </View>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.title}>Calm Talk</Text>
      <Text style={styles.subtitle}>Login or signup to check Calm Talk.</Text>
      <View style={styles.inputContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          onSelect={(country) => setCountryCode(country.cca2)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile number *"
          placeholderTextColor={'gray'}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Verify')}
      >
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      {/* <View style={styles.socialLoginContainer}>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => console.log('Google Signin')}
        />
        {Platform.OS === 'ios' && (
          <AppleButton
            style={styles.appleButton}
            buttonStyle={AppleButton.Style.BLACK}
            buttonType={AppleButton.Type.SIGN_IN}
            onPress={() => console.log('Apple Signin')}
          />
        )}
        <TouchableOpacity style={styles.facebookButton}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('../../assets/images/apple.png')}
            resizeMode="contain"
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('../../assets/images/google.png')}
            resizeMode="contain"
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginButton}>
          <Image
            source={require('../../assets/images/facebook.png')}
            resizeMode="contain"
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  languageContainer: {
    // flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  languageButton: {
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  flagImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  languageText: {
    fontSize: 16,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  illustration: {
    width: 400,
    height: 240,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 27,
    // fontWeight: 'bold',
    // textAlign: 'center'
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#B1C181',
    // textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    // textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  continueButton: {
    backgroundColor: '#B1C181',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  socialLoginButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  googleButton: {
    width: 192,
    height: 48,
  },
  appleButton: {
    width: 192,
    height: 48,
  },
  facebookButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3b5998',
  },
});

export default GuestLoginScreen;

import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const LoginScreen: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const validateFields = () => {
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError(t('login.emailRequired'));
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError(t('login.invalidEmail'));
      isValid = false;
    } else {
      setEmailError('');
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{7,}$/;
    if (!password) {
      setPasswordError(t('login.passwordRequired'));
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(t('login.invalidPassword'));
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateFields()) {
      navigation.navigate('BottomTabs');

      // To be uncommented at time of API integration
      // loginHandle(email, password);
    }
  };

  // Function to handle login with API
  // const loginHandle = async (email, password) => {
  //   try {
  //     const response = await fetch('https://calmtalk.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       // Handle successful login
  //       console.log('Login successful', data);
  //       navigation.navigate('Home');
  //     } else {
  //       // Handle login error
  //       console.error('Login failed', data);
  //     }
  //   } catch (error) {
  //     console.error('An error occurred', error);
  //   }
  // };

  // Determine the text alignment based on the current language
  const isRtl = i18n.language === 'ar';
  const textAlignStyle = isRtl ? 'right' : 'left';

  return (
    <ImageBackground
      source={require('../../assets/images/background-signup.png')}
      style={styles.imageBackground}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>

          <Text style={styles.loginText}>{t('login.title')}</Text>
          <View style={styles.middleContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/images/mail.png')}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { textAlign: textAlignStyle }]}
                placeholder={t('login.emailPlaceholder')}
                placeholderTextColor={'gray'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/images/password-lock.png')}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { textAlign: textAlignStyle }]}
                placeholder={t('login.passwordPlaceholder')}
                placeholderTextColor={'gray'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  style={styles.inputIcon}
                  source={
                    showPassword
                      ? require('../../assets/images/show-password.png')
                      : require('../../assets/images/no-show-password.png')
                  }
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <View style={styles.rememberMeContainer}>
              <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                tintColors={{ true: '#523432', false: '#000' }}
                style={styles.checkbox}
              />
              <Text style={styles.rememberMeText}>{t('login.rememberMe')}</Text>
              <TouchableOpacity
                style={styles.forgotPasswordButton}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={styles.forgotPasswordText}>
                  {t('login.forgotPassword')}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>
                {t('login.loginButton')}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orLoginWithText}>{t('login.orLoginWith')}</Text>

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

          <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
            <Text style={styles.dontHaveAccountText}>
              {t('login.dontHaveAccount')}
            </Text>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.registerButtonText}>
                {t('login.register')}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>{t('login.or')}</Text>

          <TouchableOpacity
            style={styles.guestButton}
            onPress={() => navigation.navigate('GuestLogin')}
          >
            <Text style={styles.guestButtonText}>
              {t('login.continueAsGuest')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginTop: '32%',
  },
  logo: {
    width: '50%',
    height: 100,
  },
  loginText: {
    fontSize: 22,
    color: '#523432',
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    paddingLeft: 10,
    backgroundColor: '#DEDEDE33',
  },
  middleContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  errorText: {
    color: '#523432',
    marginBottom: 10,
    marginLeft: 10,
  },
  rememberMeContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeText: {
    marginHorizontal: 10,
  },
  forgotPasswordButton: {
    marginLeft: 'auto',
  },
  forgotPasswordText: {
    color: '#523432',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#B1C181',
    padding: 13,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orLoginWithText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#523432',
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
  registerButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#523432',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  dontHaveAccountText: {
    color: '#523432',
  },
  guestButton: {
    alignItems: 'center',
  },
  guestButtonText: {
    color: '#523432',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  checkbox: {
    width: 20,
    height: 20,
  },
});

export default LoginScreen;

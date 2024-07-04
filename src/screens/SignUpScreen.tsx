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

const SignUpScreen: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const validateFields = () => {
    let isValid = true;

    if (!firstName) {
      setFirstNameError(t('signup.firstNameRequired'));
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError(t('signup.lastNameRequired'));
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (!email) {
      setEmailError(t('signup.emailRequired'));
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError(t('signup.invalidEmail'));
      isValid = false;
    } else {
      setEmailError('');
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{7,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(t('signup.invalidPassword'));
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!rememberMe) {
      setTermsError(t('signup.termsRequired'));
      isValid = false;
    } else {
      setTermsError('');
    }

    return isValid;
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleRegister = () => {
    if (validateFields()) {
      navigation.navigate('Verify'); // Replace with your intended navigation action
      // To be uncommented at time of API integration
      // signupHandle( firstName, lastName, email, password);
    }
  };

  // Function to handle signup with API
  // const signupHandle = async ( firstName, lastName, email, password) => {
  //   try {
  //     const response = await fetch('https://calmtalk.com/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ firstName, lastName, email, password }),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       // Handle successful signup
  //       console.log('Signup successful', data);
  //       navigation.navigate('Home');
  //     } else {
  //       // Handle signup error
  //       console.error('Signup failed', data);
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

          <Text style={styles.loginText}>{t('signup.title')}</Text>
          <View style={styles.middleContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/images/user.png')}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { textAlign: textAlignStyle }]}
                placeholder={t('signup.firstNamePlaceholder')}
                placeholderTextColor={'gray'}
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            {firstNameError ? (
              <Text style={styles.errorText}>{firstNameError}</Text>
            ) : null}

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/images/user.png')}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { textAlign: textAlignStyle }]}
                placeholder={t('signup.lastNamePlaceholder')}
                placeholderTextColor={'gray'}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
            {lastNameError ? (
              <Text style={styles.errorText}>{lastNameError}</Text>
            ) : null}

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={require('../../assets/images/mail.png')}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.input, { textAlign: textAlignStyle }]}
                placeholder={t('signup.emailPlaceholder')}
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
                placeholder={t('signup.passwordPlaceholder')}
                placeholderTextColor={'gray'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
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
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  tintColors={{ true: '#523432', false: '#000' }}
                  style={styles.checkbox}
                />
              </View>
              <Text style={styles.rememberMeText}>
                {t('signup.agreeTerms')}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('TermsAndConditions')}
              >
                <Text style={{ textDecorationLine: 'underline' }}>
                  {t('signup.termsAndConditions')}
                </Text>
              </TouchableOpacity>
            </View>
            {termsError ? (
              <Text style={styles.errorText}>{termsError}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleRegister}
            >
              <Text style={styles.loginButtonText}>
                {t('signup.registerButton')}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.orLoginWithText}>
            {t('signup.orRegisterWith')}
          </Text>

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
              {t('signup.alreadyMember')}
            </Text>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.registerButtonText}>
                {t('login.loginButton')}
              </Text>
            </TouchableOpacity>
          </View>
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
  inputIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    color: '#000',
  },
  checkboxContainer: {
    transform: [{ scale: 0.7 }],
  },
  checkbox: {
    alignSelf: 'center',
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
  middleContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  orLoginWithText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialLoginButton: {
    marginHorizontal: 10,
  },
  dontHaveAccountText: {
    alignSelf: 'center',
    fontSize: 16,
    marginVertical: 20,
  },
  registerButton: {
    alignSelf: 'center',
    borderBottomColor: '#523432',
    borderBottomWidth: 1,
  },
  registerButtonText: {
    color: '#523432',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 10,
  },
});

export default SignUpScreen;

import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const navigation = useNavigation();
  const { i18n, t } = useTranslation();

  const validateFields = () => {
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError(t('forgotPassword.emailRequired'));
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError(t('forgotPassword.invalidEmail'));
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      // To be uncommented at time of API integration
      // forgotPasswordHandle( email);
    }
  };

  // Function to handle login with API
  // const forgotPasswordHandle = async ( email) => {
  //   try {
  //     const response = await fetch('https://calmtalk.com/forgot_password', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({email}),
  //     });
  //     const data = await response.json();
  //     if (response.ok) {
  //       // Handle successful login
  //       console.log('Forgot Password successful', data);
  //       navigation.navigate('Home');
  //     } else {
  //       // Handle login error
  //       console.error('Forgot Password failed', data);
  //     }
  //   } catch (error) {
  //     console.error('An error occurred', error);
  //   }
  // };

  const isRtl = i18n.language === 'ar';
  const textAlignStyle = isRtl ? 'right' : 'left';

  return (
    <ImageBackground
      source={require('../../assets/images/background-signup.png')}
      style={styles.imageBackground}
    >
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <Text style={styles.loginText}>{t('forgotPassword.title')}</Text>
      <View style={styles.middleContainer}>
        <Text style={{ marginVertical: 10 }}>
          {t('forgotPassword.description')}
        </Text>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../../assets/images/mail.png')}
            resizeMode="contain"
          />
          <TextInput
            style={[styles.input, { textAlign: textAlignStyle }]}
            placeholder={t('forgotPassword.emailPlaceholder')}
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>
            {t('forgotPassword.submit')}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          marginVertical: 10,
        }}
      >
        <Text style={styles.dontHaveAccountText}>
          {t('forgotPassword.dontHaveAccount')}
        </Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.registerButtonText}>
            {' '}
            {t('forgotPassword.register')}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
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
    marginVertical: 20,
    paddingLeft: 10,
    backgroundColor: '#DEDEDE33',
  },
  middleContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  inputIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  loginButton: {
    backgroundColor: '#B1C181',
    padding: 13,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#523432',
  },
  registerButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#523432',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  dontHaveAccountText: {
    color: '#523432',
    marginVertical: 10,
  },

  errorText: {
    color: '#523432',
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default ForgotPasswordScreen;

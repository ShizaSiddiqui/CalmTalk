import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VerifyScreen = () => {
  const [countryCode, setCountryCode] = useState('AE');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.title}>Calm Talk</Text>
            <Text style={styles.subtitle}>
              Login or signup to check Calm Talk.
            </Text>

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
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Verify')}
        >
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 27,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#B1C181',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
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
    margin: 20,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyScreen;

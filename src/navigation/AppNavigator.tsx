// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '../screens/LoginScreen';
import GuestLoginScreen from '../screens/GuestLoginScreen';
import VerifyScreen from '../screens/VerifyScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import IntroductoryScreen from '../screens/IntroductoryScreen';
import SplashScreenComponent from '../components/SplashScreenComponent';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: true }}
      >
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuestLogin"
          component={GuestLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Intro"
          component={IntroductoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreenComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditionsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

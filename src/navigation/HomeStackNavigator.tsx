// src/navigation/HomeStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ConfirmAppointment from '../screens/ConfirmAppointment';
import TherapistFormScreen from '../screens/TherapistFormScreen';
import OurTeamListScreen from '../screens/OurTeamListScreen';
import TherapistSpeaksScreen from '../screens/TherapistSpeaksScreen';
import ExpressAndChatScreen from '../screens/ExpressAndChatScreen';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ConfirmAppointment" component={ConfirmAppointment} />
      <Stack.Screen
        name="TherapistFormScreen"
        component={TherapistFormScreen}
      />
      <Stack.Screen
        name="TherapistSpeaksScreen"
        component={TherapistSpeaksScreen}
      />
      {/* <Stack.Screen
        name="ExpressAndChatScreen"
        component={TherapistSpeaksScreen}
      /> */}
      <Stack.Screen
        name="ExpressAndChatScreen"
        component={ExpressAndChatScreen}
      />

      <Stack.Screen name="OurTeamListScreen" component={OurTeamListScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

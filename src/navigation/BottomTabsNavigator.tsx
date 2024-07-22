// src/navigation/BottomTabsNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import DiscoverStackNavigator from './DiscoverStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import TabIcon from '../components/TabIcon';
import { Platform } from 'react-native';

const homeIcon = require('../../assets/images/home_bottom_tabs.png');
const discoverIcon = require('../../assets/images/discover_bottom_tabs.png');
const profileIcon = require('../../assets/images/profile_bottom_tabs.png');

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          let label;

          if (route.name === 'Home') {
            icon = homeIcon;
            label = 'Home';
          } else if (route.name === 'Discover') {
            icon = discoverIcon;
            label = 'Discover';
          } else if (route.name === 'Profile') {
            icon = profileIcon;
            label = 'Profile';
          }

          return <TabIcon focused={focused} icon={icon} label={label} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height:Platform.OS ==='android'?  75 : 80,
          paddingTop: Platform.OS ==='ios'?  25 : 10,
          backgroundColor: '#ECF9EE',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

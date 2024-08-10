// src/navigation/DiscoverScreen.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import AssessmentScreen from '../screens/AssessmentScreen';
import AssessmentQuestionsScreen from '../screens/AssessmentQuestionsScreen';
import ProductCategoriesScreen from '../screens/ProductCategoriesScreen';
import ProductItemFormScreen from '../screens/ProductItemFormScreen';
import OurTeamListScreen from '../screens/OurTeamListScreen';
import TherapistSpeaksScreen from '../screens/TherapistSpeaksScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import DepressionByPHQScreen from '../screens/DepressionByPHQScreen';
import BlogsFavoriteScreen from '../screens/BlogsFavoriteScreen';
import BlogsScreen from '../screens/BlogsScreen';
import BlogsReadViewScreen from '../screens/BlogsReadViewScreen';
import ExpressAndChatScreen from '../screens/ExpressAndChatScreen';
import TherapistFormScreen from '../screens/TherapistFormScreen';

const Stack = createStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <Stack.Screen name="OurTeamListScreen" component={OurTeamListScreen} />
      <Stack.Screen name="AssessmentScreen" component={AssessmentScreen} />
      <Stack.Screen
        name="AssessmentQuestionsScreen"
        component={AssessmentQuestionsScreen}
      />

      <Stack.Screen
        name="DepressionByPHQScreen"
        component={DepressionByPHQScreen}
      />
      <Stack.Screen
        name="TherapistSpeaksScreen"
        component={TherapistSpeaksScreen}
      />
      <Stack.Screen
        name="TherapistFormScreen"
        component={TherapistFormScreen}
      />
      <Stack.Screen name="BlogsScreen" component={BlogsScreen} />
      <Stack.Screen
        name="BlogsReadViewScreen"
        component={BlogsReadViewScreen}
      />
      <Stack.Screen
        name="BlogsFavoriteScreen"
        component={BlogsFavoriteScreen}
      />
      <Stack.Screen
        name="ExpressAndChatScreen"
        component={ExpressAndChatScreen}
      />
      <Stack.Screen
        name="ProductCategoriesScreen"
        component={ProductCategoriesScreen}
      />
      <Stack.Screen
        name="ProductItemFormScreen"
        component={ProductItemFormScreen}
      />

      <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} />
    </Stack.Navigator>
  );
};

export default DiscoverStackNavigator;

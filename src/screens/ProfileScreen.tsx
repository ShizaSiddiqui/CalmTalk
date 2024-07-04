import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import HowYouFeel from '../components/HowYouFeel';
import BookAppointment from '../components/BookAppointment';
import OurTeam from '../components/OurTeam';
import Pathway from '../components/Pathway';
import ForYou from '../components/ForYou';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      {/* <BookAppointment />
      <OurTeam />
      <Pathway />
      <ForYou /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  peaceText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ProfileScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const feelings = ['Excellent', 'Good', 'Okay', 'Bad', 'Terrible'];

const HowYouFeel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How you feel today?</Text>
      <View style={styles.feelingsContainer}>
        {feelings.map((feeling, index) => (
          <TouchableOpacity key={index} style={styles.feelingButton}>
            <Text style={styles.feelingText}>{feeling}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feelingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feelingButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  feelingText: {
    fontSize: 16,
  },
});

export default HowYouFeel;

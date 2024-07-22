// src/components/TabIcon.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TabIcon = ({ focused, icon, label }) => {
  return (
    <View style={[styles.container, focused && styles.focusedContainer]}>
      <Image source={icon} style={styles.icon} />
      {focused && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  focusedContainer: {
    flexDirection: 'row',
    backgroundColor: '#c1e1c1',
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    marginLeft: 5,
    fontSize: 8,
    color: '#222',
  },
});

export default TabIcon;

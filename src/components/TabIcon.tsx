// src/components/TabIcon.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface TabIconProps {
  focused: boolean;
  label: string;
  icon: any;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, label, icon }) => {
  return (
    <View style={[styles.container, focused && styles.activeContainer]}>
      <Image
        source={icon}
        style={[styles.icon, focused && styles.activeIcon]}
      />
      {focused && (
        <Text style={[styles.label, styles.activeLabel]}>{label}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 45,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  activeContainer: {
    backgroundColor: '#B1C181', // Change the color as needed
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'grey', // Inactive icon color
  },
  activeIcon: {
    tintColor: 'white', // Active icon color
  },
  label: {
    fontSize: 12,
    color: 'grey', // Inactive label color
  },
  activeLabel: {
    color: 'white', // Active label color
  },
});

export default TabIcon;

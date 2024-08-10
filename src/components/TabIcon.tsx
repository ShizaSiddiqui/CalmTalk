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
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'transparent',

    // borderWidth:1
  },
  activeContainer: {
    backgroundColor: '#B1C181',
    flexDirection: 'row',
    paddingVertical: 10,
    // Change the color as needed
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: '#B1C181', // Inactive icon color
  },
  activeIcon: {
    tintColor: 'white', // Active icon color
  },
  label: {
    fontSize: 12,
    marginHorizontal: 5,
    color: 'grey',
    fontWeight: 'bold',
  },
  activeLabel: {
    color: 'white', // Active label color
  },
});

export default TabIcon;

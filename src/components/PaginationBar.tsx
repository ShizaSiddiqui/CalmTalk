import React from 'react';
import { View, StyleSheet } from 'react-native';

interface PaginationBarProps {
  activeIndex: number;
  total: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  activeIndex,
  total,
}) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex ? styles.activeDot : styles.inactiveDot,
            index === activeIndex && styles.activeDotExtraWidth,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // marginTop: 20,
  },
  dot: {
    // width: 20,
    // height: 10,
    // borderRadius: 5,
    // marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#B9C78F',
  },
  inactiveDot: {
    backgroundColor: '#E4E4E7',
  },
  activeDotExtraWidth: {
    width: 20, // Adjust the width for the active dot
  },
});

export default PaginationBar;

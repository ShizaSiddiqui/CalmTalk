import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import the image you uploaded
const uploadedImage = require('../../assets/images/highlighted_products.png');

const HighlightedProductsTile = ({ title = 'Lavender Oil', onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.courseTile}>
      <LinearGradient
        colors={['#9DB8A1', '#B1C181B2']}
        start={{ x: 0.08, y: 0.02 }}
        end={{ x: 0.93, y: 0.98 }}
        style={styles.gradient}
      >
        <Image
          source={uploadedImage}
          style={styles.courseImage}
          resizeMode="contain"
        />

        <Text style={styles.courseTitle}>{title}</Text>
        <View style={styles.bulletsContainer}>
          <Image
            source={require('../../assets/images/checkmark_payment.png')}
            style={styles.bulletsImage}
            resizeMode="contain"
          />

          <Text style={styles.courseSubText}>Promotes relaxation</Text>
        </View>

        <View style={styles.bulletsContainer}>
          <Image
            source={require('../../assets/images/checkmark_payment.png')}
            style={styles.bulletsImage}
            resizeMode="contain"
          />

          <Text style={styles.courseSubText}>Eases anxiety</Text>
        </View>

        <View style={styles.bulletsContainer}>
          <Image
            source={require('../../assets/images/checkmark_payment.png')}
            style={styles.bulletsImage}
            resizeMode="contain"
          />

          <Text style={styles.courseSubText}>Improves mood</Text>
        </View>

        <View style={styles.tagsContainer}>
          <Text style={{ marginHorizontal: 5, alignSelf: 'center' }}>
            Check on
          </Text>
          <Image
            source={require('../../assets/images/check_on.png')}
            style={styles.checkOnImage}
            resizeMode="contain"
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseTile: {
    // borderWidth: 1,
    width: 300,
    backgroundColor: '#E5F6EF', // Background color from the image
    borderRadius: 20, // Adjusted border radius
    marginRight: 10,
    elevation: 5, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: 10,
  },
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'black',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    zIndex: 1, // Add z-index to make sure
  },
  gradient: {
    width: '100%',
    height: 190, // Adjusted height to match the image
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  courseImage: {
    width: '50%',
    height: '90%',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  courseTitle: {
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 18, // Adjusted font size
    color: '#2D2D2D', // Title color
  },
  courseSubText: {
    fontSize: 14, // Adjusted font size
    color: '#282828B2',
    // marginHorizontal: 10,
    width: '80%',
    lineHeight: 25,
  },
  bulletsImage: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  bulletsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '40%',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
  },
  tag: {
    backgroundColor: '#45A16DD9',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  tagText: {
    fontSize: 11,
    color: 'white',
  },
  checkOnImage: {
    width: 20,
    height: 20,
    // marginHorizontal:
  },
});

export default HighlightedProductsTile;

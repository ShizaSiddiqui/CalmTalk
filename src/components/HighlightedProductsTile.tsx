import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';

// Import the image you uploaded
const uploadedImage = require('../../assets/images/highlighted_products.png');

const HighlightedProductsTile = ({ title, onPress }) => {
  // Assuming `uploadedImage` is dynamically provided or passed as a prop
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

  title = t('highlightedProductTile.lavenderOil');
  // Example bullet points data, replace with actual data as needed
  const bulletPoints = [
    {
      image: require('../../assets/images/checkmark_payment.png'),
      text: t('highlightedProductTile.promotesRelaxation'),
    },
    {
      image: require('../../assets/images/checkmark_payment.png'),
      text: t('highlightedProductTile.easesAnxiety'),
    },
    {
      image: require('../../assets/images/checkmark_payment.png'),
      text: t('highlightedProductTile.improvesMood'),
    },
  ];

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

        <Text style={[styles.courseTitle, { alignSelf: alignItemStyle }]}>
          {title}
        </Text>

        {bulletPoints.map((bullet, index) => (
          <View key={index} style={[styles.bulletsContainer]}>
            <Image
              source={bullet.image}
              style={styles.bulletsImage}
              resizeMode="contain"
            />
            <Text style={[styles.courseSubText, { textAlign: textAlignStyle }]}>
              {bullet.text}
            </Text>
          </View>
        ))}

        <View style={styles.tagsContainer}>
          <Text style={{ marginHorizontal: 5, alignSelf: 'center' }}>
            {t('highlightedProductTile.checkOn')}
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
    width: 300,
    backgroundColor: '#E5F6EF',
    borderRadius: 20,
    marginRight: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: 10,
  },

  gradient: {
    width: '100%',
    height: 190,
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
    fontSize: 18,
    color: '#2D2D2D',
  },
  courseSubText: {
    fontSize: 14,
    color: '#282828B2',
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
  },
});

export default HighlightedProductsTile;

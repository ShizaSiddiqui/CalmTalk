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

// Import the image you uploaded
const uploadedImage = require('../../assets/images/therapy_courses_render_item_bg.png');

import { useTranslation } from 'react-i18next';

const TherapyCoursesTile = ({ title, subText, onPress }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;

  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

  title = t('therapyCoursesTile.title');
  subText = t('therapyCoursesTile.subText');

  return (
    <TouchableOpacity onPress={onPress} style={styles.courseTile}>
      <View
        style={[
          styles.headerTag,
          { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
        ]}
      >
        <Text style={{ color: 'white', fontSize: 10 }}>
          {t('therapyCoursesTile.free')}
        </Text>
      </View>
      <LinearGradient
        colors={['#45A16D4D', '#FFFFFF']}
        start={{ x: 0.08, y: 0.02 }}
        end={{ x: 0.93, y: 0.98 }}
        style={styles.gradient}
      >
        <Image
          source={uploadedImage}
          style={styles.courseImage}
          // resizeMode="contain"
        />
        <View style={{ marginHorizontal: 15 }}>
          <Text style={[styles.courseTitle, { alignSelf: alignItemStyle }]}>
            {title}
          </Text>
          <View style={{ height: '60%', width: '70%' }}>
            <Text style={[styles.courseSubText, { textAlign: textAlignStyle }]}>
              {subText}
            </Text>
          </View>
        </View>
        <View style={styles.tagsContainer}>
          <Image
            source={require('../../assets/images/play_therapy_tile.png')}
            style={styles.playImage}
            resizeMode="contain"
          />

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {t('therapyCoursesTile.tagYoga')}
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {t('therapyCoursesTile.tagMentalHealth')}
            </Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>
              {t('therapyCoursesTile.tagYoga')}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseTile: {
    width: 350,
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
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'black',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    zIndex: 1,
  },
  gradient: {
    width: '100%',
    height: 170,
    borderRadius: 20,
    paddingVertical: 10,
    // paddingHorizontal: 15,
  },
  courseImage: {
    width: 140,
    height: 130,
    // borderWidth:1,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  courseTitle: {
    marginVertical: 8,
    fontWeight: '500',
    fontSize: 20,
    color: '#2D2D2D',
  },
  courseSubText: {
    fontSize: 12,
    color: '#888A95',
    // width: '80%',
    lineHeight: 21,
  },
  tagsContainer: {
    flexDirection: 'row',
    // marginTop: 10,
    alignItems: 'center',
    // borderWidth: 1,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  tag: {
    backgroundColor: '#45A16DD9',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  tagText: {
    fontSize: 10,
    color: 'white',
  },
  playImage: {
    width: 40,
    height: 40,
    marginTop: 5,
  },
});

export default TherapyCoursesTile;

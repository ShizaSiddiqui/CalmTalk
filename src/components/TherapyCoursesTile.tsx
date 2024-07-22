import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,I18nManager } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import the image you uploaded
const uploadedImage = require('../../assets/images/therapy_courses_render_item_bg.png');

import { t } from 'i18next';

const TherapyCoursesTile = ({
  title = t('therapyCoursesTile.title'),
  subText = t('therapyCoursesTile.subText'),
  onPress,
}) => {
  const isRTL = I18nManager.isRTL;
  const textAlignStyle =  isRTL ? 'right': 'left';
  const alignItemStyle =  isRTL ? 'flex-start': null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }]   : [{ rotate: '0deg' }];
  const alignSelfStyle= isRTL? 'flex-start'   : null;
  return (
    <TouchableOpacity onPress={onPress} style={styles.courseTile}>
      <View
        style={[
          styles.headerTag,
          { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
        ]}
      >
        <Text style={{ color: 'white' }}>{t('therapyCoursesTile.free')}</Text>
      </View>
      <LinearGradient
        colors={['#FFFFFF', 'rgba(69, 161, 109, 0.3)']}
        start={{ x: 0.08, y: 0.02 }}
        end={{ x: 0.93, y: 0.98 }}
        style={styles.gradient}
      >
        <Image
          source={uploadedImage}
          style={styles.courseImage}
          resizeMode="contain"
        />
<View>
        <Text style={[styles.courseTitle,  {alignSelf:alignSelfStyle}]}>{title}</Text>
        {/* <View style={{height:'50%', width:'70%' }}> */}
        <Text style={[styles.courseSubText, {alignSelf:alignSelfStyle}]}>{subText}</Text>
        {/* </View> */}
        </View>
        <View style={styles.tagsContainer}>
          <Image
            source={require('../../assets/images/play.png')}
            style={styles.playImage}
            resizeMode="contain"
          />

          <View style={styles.tag}>
            <Text style={styles.tagText}>{t('therapyCoursesTile.tagYoga')}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{t('therapyCoursesTile.tagMentalHealth')}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{t('therapyCoursesTile.tagYoga')}</Text>
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
    fontWeight: '500',
    fontSize: 18,
    color: '#2D2D2D', 

  },
  courseSubText: {
    fontSize: 14,
    color: '#888A95',
    width: '80%',
    lineHeight: 25,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
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
  playImage: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
});

export default TherapyCoursesTile;

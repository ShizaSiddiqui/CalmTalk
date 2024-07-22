import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  I18nManager
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const AssessmentsScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const isRTL = I18nManager.isRTL;
  const textAlignStyle =  isRTL ? 'right': 'left';
  const transformStyle = isRTL ? [{ rotate: '180deg' }]   : [{ rotate: '0deg' }];
  const alignSelfStyle = isRTL ? 'flex-start' : null;


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/header_assessments.png')}
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={[styles.backArrow, {transform:transformStyle}]}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{t('assessments.assessments')}</Text>
        </View>
        <Image
          source={require('../../assets/images/assessments_header.png')}
          style={styles.headerIcon}
          resizeMode="contain"
        />
      </ImageBackground>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.assessmentItem}
          onPress={() =>
            navigation.navigate('DepressionByPHQScreen', {
              title: t('assessments.depressionByPHQ9'),
            })
          }
        >
          <View style={styles.assessmentText}>
            <Text style={[styles.assessmentTitle, {alignSelf: alignSelfStyle}]}>
              {t('assessments.depressionByPHQ9')}
            </Text>
            <Text style={styles.assessmentDescription}>
              {t('assessments.depressionByPHQ9Description')}
            </Text>
            <Text style={styles.assessmentDuration}>
              {t('assessments.duration', { minutes: 10 })}
            </Text>
          </View>
          <View style={styles.assessmentImage}>
            <Image
              source={require('../../assets/images/depression_by_PHQ.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.assessmentItem}
          onPress={() =>
            navigation.navigate('DepressionByPHQScreen', {
              title: t('assessments.anxietyByZung'),
            })
          }
        >
          <View style={styles.assessmentText}>
            <Text style={styles.assessmentTitle}>
              {t('assessments.anxietyByZung')}
            </Text>
            <Text style={styles.assessmentDescription}>
              {t('assessments.anxietyByZungDescription')}
            </Text>
            <Text style={styles.assessmentDuration}>
              {t('assessments.duration', { minutes: 10 })}
            </Text>
          </View>
          <View style={styles.assessmentImage}>
            <Image
              source={require('../../assets/images/anxiety_by_zung.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.assessmentItem}
          onPress={() =>
            navigation.navigate('DepressionByPHQScreen', {
              title: t('assessments.angerManagement'),
            })
          }
        >
          <View style={styles.assessmentText}>
            <Text style={styles.assessmentTitle}>
              {t('assessments.angerManagement')}
            </Text>
            <Text style={styles.assessmentDescription}>
              {t('assessments.angerManagementDescription')}
            </Text>
            <Text style={styles.assessmentDuration}>
              {t('assessments.duration', { minutes: 10 })}
            </Text>
          </View>
          <View style={styles.assessmentImage}>
            <Image
              source={require('../../assets/images/anger_management.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: 260,
    paddingTop: '15%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: '8%',
  },
  backButton: {
    marginLeft: -3,
    paddingHorizontal: 8,
  },
  backArrow: {
    width: 15,
    height: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
    // color: '#FFFFFF',
  },

  headerIcon: {
    width: 200,
    height: 120,
    position: 'absolute',
    bottom: 5,
    right: 80,
    transform: [{ rotate: '-1deg' }],
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  assessmentItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  assessmentText: {
    flex: 1,
  },
  assessmentImage: {
    width: 70,
    height: 70,
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  assessmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  assessmentDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  assessmentDuration: {
    fontSize: 14,
    color: '#808080',
  },
});

export default AssessmentsScreen;

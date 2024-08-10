import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const AssessmentScreen = () => {
  const navigation = useNavigation();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignSelfStyle = isRTL ? 'flex-start' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

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
              style={[styles.backArrow, { transform: transformStyle }]}
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
            <Text
              style={[styles.assessmentTitle, { textAlign: textAlignStyle }]}
            >
              {t('assessments.depressionByPHQ9')}
            </Text>
            <Text
              style={[
                styles.assessmentDescription,
                { textAlign: textAlignStyle },
              ]}
            >
              {t('assessments.depressionByPHQ9Description')}
            </Text>
            <Text
              style={[styles.assessmentDuration, { textAlign: textAlignStyle }]}
            >
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
            <Text
              style={[styles.assessmentTitle, { textAlign: textAlignStyle }]}
            >
              {t('assessments.anxietyByZung')}
            </Text>
            <Text
              style={[
                styles.assessmentDescription,
                { textAlign: textAlignStyle },
              ]}
            >
              {t('assessments.anxietyByZungDescription')}
            </Text>
            <Text
              style={[styles.assessmentDuration, { textAlign: textAlignStyle }]}
            >
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
            <Text
              style={[styles.assessmentTitle, { textAlign: textAlignStyle }]}
            >
              {t('assessments.angerManagement')}
            </Text>
            <Text
              style={[
                styles.assessmentDescription,
                { textAlign: textAlignStyle },
              ]}
            >
              {t('assessments.angerManagementDescription')}
            </Text>
            <Text
              style={[styles.assessmentDuration, { textAlign: textAlignStyle }]}
            >
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
    fontSize: 22,
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
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  assessmentDescription: {
    fontSize: 10,
    marginBottom: 5,
    color: '#888A95',
  },
  assessmentDuration: {
    fontSize: 11,
    color: '#0F161E',
  },
});

export default AssessmentScreen;

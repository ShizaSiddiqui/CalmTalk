import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  I18nManager,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const DepressionByPHQScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title } = route.params;

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
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={[styles.backArrow, { transform: transformStyle }]}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle]}>{title}</Text>
        </View>

        <View style={styles.timeContainer}>
          <Image
            source={require('../../assets/images/clock-icon.png')}
            style={styles.timeIcon}
          />
          <Text style={[styles.timeText]}>
            {t('depressionByPHQ.assessmentTime')}
          </Text>
        </View>
        <Image
          source={require('../../assets/images/depression_by_PHQ.png')}
          style={styles.headerIcon}
          resizeMode="contain"
        />
      </ImageBackground>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={[styles.aboutContainer]}>
          <Text style={[styles.aboutTitle, { textAlign: textAlignStyle }]}>
            {t('depressionByPHQ.aboutAssessment')}
          </Text>
          <Text style={[styles.aboutText, { textAlign: textAlignStyle }]}>
            {t('depressionByPHQ.aboutAssessmentText')}
          </Text>
        </View>
        <View style={styles.previousContainer}>
          <Text style={[styles.previousTitle, { textAlign: textAlignStyle }]}>
            {t('depressionByPHQ.previousAssessment')}
          </Text>
          <View style={[styles.previousItem]}>
            <Text
              style={[styles.depressionText, { textAlign: textAlignStyle }]}
            >
              {t('depressionByPHQ.depressionPHQ')}
            </Text>

            <View style={styles.previousItemRow}>
              <View style={styles.previousDateContainer}>
                <Image
                  source={require('../../assets/images/calendar-icon.png')}
                  style={styles.calendarIcon}
                />
                <Text style={styles.previousDate}>
                  {t('depressionByPHQ.assessmentDate', { date: '14 Aug 2k24' })}
                </Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: '#888A95', fontSize: 10 }}>
                  {t('depressionByPHQ.result')}
                </Text>
                <Text style={styles.previousResult}>20/30</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            navigation.navigate('AssessmentQuestionsScreen');
          }}
        >
          <Text style={styles.startButtonText}>
            {t('depressionByPHQ.startAssessment')}
          </Text>
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
  },

  headerIcon: {
    width: 300,
    height: 120,
    position: 'absolute',
    bottom: 2,
    right: 0,
    transform: [{ rotate: '-7deg' }],
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
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  timeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  timeText: {
    fontSize: 16,
    color: '#0F161E',
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 30,
  },
  aboutText: {
    fontSize: 13,
    color: '#888A95',
  },
  previousContainer: {
    marginBottom: 20,
  },
  previousTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  depressionText: {
    fontSize: 17,
    fontWeight: '400',
    marginTop: 10,
  },
  previousItem: {
    padding: 10,
    backgroundColor: '#FBFCF4',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  previousItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previousDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'flex-end',
  },
  calendarIcon: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  previousDate: {
    fontSize: 11,
    color: '#0F161E',
  },
  previousResult: {
    fontSize: 30,
    fontWeight: '400',
  },
  startButton: {
    backgroundColor: '#B1C181',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DepressionByPHQScreen;

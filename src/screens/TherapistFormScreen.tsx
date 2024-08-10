import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  I18nManager,
} from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';

const TherapistFormScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(4);

  const navigation = useNavigation();

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];
  const alignSelfStyle = isRTL ? 'flex-start' : null;

  const handleConfirmDate = (selectedDate: Date) => {
    setShowDatePicker(false);
    setDate(selectedDate);
  };

  const handleConfirmTime = (selectedTime: Date) => {
    setShowTimePicker(false);
    setDate(selectedTime);
  };

  const therapistInfo = {
    name: 'Dr. John Mark',
    title: 'Clinical Psychologist',
    specializations: ['Depression', 'Anxiety', 'OCD'],
    nationality: 'Emirati',
    experience: '7 Years',
    languages: ['EN', 'AR'],
    about: t('ourteam.description'),
  };

  const flatListItems = [
    {
      id: '1',
      title: 'What social anxiety disorder',
      content:
        'Social anxiety disorder, or social phobia is characterized by an intense fear of social situations and being judged by others. This condition can lead to avoidance of daily activities..',
      image: require('../../assets/images/therapist_speaks.png'),
    },
    {
      id: '2',
      title: 'What social anxiety disorder',
      content:
        'Social anxiety disorder, or social phobia is characterized by an intense fear of social situations and being judged by others. This condition can lead to avoidance of daily activities.',
      image: require('../../assets/images/therapist_speaks.png'),
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../assets/images/therapist_form_header.png')}
        style={styles.background}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop()}
        >
          <Image
            source={require('../../assets/images/back.png')}
            style={{
              width: 15,
              height: 15,
              marginTop: '11%',
              transform: transformStyle,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View
            style={[
              styles.headerTag,
              { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
            ]}
          >
            <Text style={{ color: 'white', fontSize: 10 }}>
              {t('form.individual_couple')}
            </Text>
          </View>
          <Image
            source={require('../../assets/images/doctor.png')}
            style={styles.profileImage}
            resizeMethod="contain"
          />
          <View style={styles.headerText}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  borderBottomWidth: 0.5,
                  marginBottom: 5,
                  borderColor: '#0000004D',
                }}
              >
                <Text style={styles.doctorName}>{therapistInfo.name}</Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/play.png')}
                  style={styles.playIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <Text style={[styles.doctorTitle, { alignSelf: alignSelfStyle }]}>
              {t('form.clinical_psychologist')}
            </Text>

            <View style={styles.specializations}>
              {therapistInfo.specializations.map((spec, index) => (
                <View key={index} style={styles.specialization}>
                  <Text style={styles.specializationText}>{spec}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{t('form.nationality')}</Text>
          <Text style={styles.infoSubtitle}>{therapistInfo.nationality}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{t('form.experience')}</Text>
          <Text style={styles.infoSubtitle}>{therapistInfo.experience}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{t('form.languages')}</Text>
          <Text style={styles.infoSubtitle}>
            {therapistInfo.languages.join(' | ')}
          </Text>
        </View>
      </View>
      <View style={[styles.aboutContainer]}>
        <Text style={[styles.sectionTitle, { textAlign: textAlignStyle }]}>
          {t('form.about_me')}
        </Text>
        <Text style={[styles.sectionContent, { textAlign: textAlignStyle }]}>
          {therapistInfo.about}
        </Text>
      </View>
      <Text
        style={[styles.therapistSpeaksTitle, { alignSelf: alignSelfStyle }]}
      >
        {t('form.therapist_speaks')}
      </Text>

      <View style={styles.speaksContainer}>
        <FlatList
          data={flatListItems}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatListItem}
              onPress={() => {
                navigation.navigate('TherapistSpeaksScreen');
              }}
            >
              <Image
                source={item.image}
                style={styles.flatListImage}
                resizeMode="contain"
              />
              <View
                style={[styles.flatListText, { alignItems: alignItemStyle }]}
              >
                <Text style={styles.flatListTitle}>
                  {t(`form.${item.id}.title`)}
                </Text>
                <Text
                  style={[
                    styles.flatListContent,
                    { textAlign: textAlignStyle },
                  ]}
                >
                  {t(`form.${item.id}.content`)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.bookingContainer}>
        <Text
          style={[styles.bookYourSessionTitle, { alignSelf: alignSelfStyle }]}
        >
          {t('form.book_your_session')}
        </Text>

        <Text style={[styles.sectionSubtitle, { alignSelf: alignSelfStyle }]}>
          {t('form.choose_your_package')}
        </Text>
        <View style={styles.packageContainer}>
          <TouchableOpacity
            style={[
              styles.packageBox,
              selectedPackage === 1 && styles.packageBoxSelected,
            ]}
            onPress={() => setSelectedPackage(1)}
          >
            <Text
              style={[
                styles.packageText,
                selectedPackage === 1 && styles.packageTextSelected,
              ]}
            >
              {t('form.package1')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.packageBox,
              selectedPackage === 4 && styles.packageBoxSelected,
            ]}
            onPress={() => setSelectedPackage(4)}
          >
            <Text
              style={[
                styles.packageText,
                selectedPackage === 4 && styles.packageTextSelected,
              ]}
            >
              {t('form.package4')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dateTimeContainer}>
        <Text
          style={[styles.bookYourSessionTitle, { alignSelf: alignSelfStyle }]}
        >
          {t('form.pick_date_time')}
        </Text>
        <Text
          style={[
            styles.sectionSubtitle,
            { marginBottom: 20, alignSelf: alignSelfStyle },
          ]}
        >
          {t('form.select_preferred_date_time')}
        </Text>

        <Text style={{ alignSelf: alignSelfStyle, fontWeight: '500' }}>
          {t('form.date')}
        </Text>
        <TouchableOpacity
          style={styles.dateTimePicker}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateTimePickerLabel}>
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 10,
            alignSelf: alignSelfStyle,
            fontWeight: '500',
          }}
        >
          {t('form.time')}
        </Text>
        <TouchableOpacity
          style={styles.dateTimePicker}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={styles.dateTimePickerLabel}>
            {date.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={() => setShowDatePicker(false)}
        />
        <DateTimePickerModal
          isVisible={showTimePicker}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={() => setShowTimePicker(false)}
        />
      </View>

      <Button
        title={t('form.book_now')}
        buttonStyle={styles.bookButton}
        onPress={() => navigation.navigate('ConfirmAppointment')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 200,
  },
  header: {
    backgroundColor: '#B1C181',
    paddingBottom: 20,
  },
  backButton: {
    padding: 10,
    marginBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderRadius: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  playIcon: {
    width: 30,
    height: 30,
    tintColor: '#B1C181',
  },
  headerText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    // textDecorationLine: 'underline',
    lineHeight: 24, // Adjust this value as needed
    paddingVertical: 5,
  },
  doctorTitle: {
    color: '#232323B2',
    fontSize: 12,
  },
  specializations: {
    flexDirection: 'row',
    marginTop: 5,
  },
  specialization: {
    backgroundColor: '#B1C18166',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 25,
    marginRight: 5,
    marginTop: 10,
  },
  specializationText: {
    fontSize: 12,
    color: '#5C5C5C',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginTop: '10%',
  },
  infoBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
  infoTitle: {
    fontSize: 12,
    marginBottom: 10,
    color: '#23232399',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#232323',
    fontWeight: 'bold',
  },
  aboutContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 15,
    marginTop: 15,
    writingDirection: 'rtl',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
  },
  therapistSpeaksTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 8,
    color: '#232323',
  },
  speaksContainer: {
    marginBottom: 20,
  },
  flatListItem: {
    flexDirection: 'row',
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  flatListImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'center',
  },
  flatListText: {
    flex: 1,
    padding: 10,
    color: '#232323',
  },
  flatListTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#232323',
  },
  flatListContent: {
    fontSize: 12,
    color: '#666',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 15,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 2,
  },
  indicatorActive: {
    backgroundColor: '#B1C181',
  },
  bookYourSessionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 14,
    color: '#232323',
  },

  bookingContainer: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  sectionSubtitle: {
    fontSize: 14,
    marginVertical: 5,
    color: '#23232399',
  },
  packageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    backgroundColor: '#ECF9EE',
    padding: 8,
    borderRadius: 18,
  },
  packageBox: {
    padding: 10,
    borderRadius: 5,
    // backgroundColor: '#B1C181',
  },
  packageBoxSelected: {
    backgroundColor: '#9DB8A1',
  },
  packageText: {
    fontSize: 14,
  },
  packageTextSelected: {
    color: 'white',
  },
  dateTimeContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 10,
  },
  dateTimePicker: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    // backgroundColor: '#E0E0E0',
    borderWidth: 0.2,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateTimePickerLabel: {
    fontSize: 14,
    color: '#23232399',
  },
  bookButton: {
    backgroundColor: '#B1C181',
    borderRadius: 10,
    margin: 20,
    marginBottom: '12%',
    paddingVertical: 13,
  },
});

export default TherapistFormScreen;

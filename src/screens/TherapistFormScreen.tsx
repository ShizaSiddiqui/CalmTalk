import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
const TherapistFormScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(4);

  const navigation = useNavigation();

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowTimePicker(false);
    setDate(currentDate);
  };

  const therapistInfo = {
    name: 'Dr. John Mark',
    title: 'Clinical Psychologist',
    specializations: ['Depression', 'Anxiety', 'OCD'],
    nationality: 'Emirati',
    experience: '7 Years',
    languages: ['EN', 'AR'],
    about:
      'Originally from Spain, I am an integrative psychotherapist and neuropsychologist. I define myself as a person who thrives on diversifying the projects I am involved in, hence why I enjoy cross-cultural psychology and remaining an active researcher. My next adventure: an existential therapy training in Paris.',
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
        {/* <View style={styles.header}> */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop()}
        >
          <Image
            source={require('../../assets/images/back.png')}
            style={{ width: 15, height: 15, marginTop: '11%' }}
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
            <Text style={{ color: 'white' }}>Individual, Couple</Text>
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
            <Text style={styles.doctorTitle}>{therapistInfo.title}</Text>

            <View style={styles.specializations}>
              {therapistInfo.specializations.map((spec, index) => (
                <View key={index} style={styles.specialization}>
                  <Text style={styles.specializationText}>{spec}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* </View> */}
      </ImageBackground>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Nationality</Text>
          <Text style={styles.infoSubtitle}>{therapistInfo.nationality}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Experience</Text>
          <Text style={styles.infoSubtitle}>{therapistInfo.experience}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Languages</Text>
          <Text style={styles.infoSubtitle}>
            {therapistInfo.languages.join(' | ')}
          </Text>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>{therapistInfo.about}</Text>
      </View>
      <Text style={styles.therapistSpeaksTitle}>Therapist speaks</Text>

      {/* Therapist speaks */}
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
              <View style={styles.flatListText}>
                <Text style={styles.flatListTitle}>{item.title}</Text>
                <Text style={styles.flatListContent}>{item.content}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        {/* <View style={styles.indicatorContainer}>
    {flatListItems.map((_, index) => (
      <View
        key={index}
        style={[
          styles.indicator,
          index === 0 && styles.indicatorActive, // Adjust this condition based on current index
        ]}
      />
    ))}
  </View> */}
      </View>
      {/* Therapist speaks ends */}
      <View style={styles.bookingContainer}>
        <Text style={styles.bookYourSessionTitle}>Book your session</Text>

        <Text style={styles.sectionSubtitle}>Choose your package</Text>
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
              $100 for a session
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
              $320 for four sessions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.bookYourSessionTitle}>Pick a date & time</Text>

        <Text style={[styles.sectionSubtitle, { marginBottom: 20 }]}>
          Select your preferred date & time
        </Text>
        <Text>Date</Text>
        <TouchableOpacity
          style={styles.dateTimePicker}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateTimePickerLabel}>09-05-24</Text>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10 }}>Time (GST) (GMT +4)</Text>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
        <TouchableOpacity
          style={styles.dateTimePicker}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={styles.dateTimePickerLabel}>5:00 PM - 6:00 PM</Text>
          <Text>{date.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>
      <Button
        title="Book Now"
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
    // fontWeight: 'bold',
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

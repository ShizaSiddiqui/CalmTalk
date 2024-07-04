import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OurTeamListScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [selectedGender, setSelectedGender] = useState('Male');

  const navigation = useNavigation();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const teamMembers = [
    {
      name: 'Dr. John',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor.png'),
    },
    {
      name: 'Dr. John',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor.png'),
    },
    {
      name: 'Dr. John',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor.png'),
    },
    {
      name: 'Dr. John',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/header_category_form.png')}
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
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Our team</Text>
        </View>
      </ImageBackground>
      <View style={styles.filterBar}>
        <Text style={styles.filterByText}>Filter By</Text>
        <TouchableOpacity>
          <Text style={styles.resetFilterText}>Reset Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.filterOptions}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedLanguage === 'EN' && styles.selectedButton,
            ]}
            onPress={() => setSelectedLanguage('EN')}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedLanguage === 'EN' && styles.selectedButtonText,
              ]}
            >
              EN
            </Text>
          </TouchableOpacity>
          <Text style={styles.pipeSeparator}>|</Text>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedLanguage === 'AR' && styles.selectedButton,
            ]}
            onPress={() => setSelectedLanguage('AR')}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedLanguage === 'AR' && styles.selectedButtonText,
              ]}
            >
              AR
            </Text>
          </TouchableOpacity>
          <Text style={styles.pipeSeparator}>|</Text>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedLanguage === 'FR' && styles.selectedButton,
            ]}
            onPress={() => setSelectedLanguage('FR')}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedLanguage === 'FR' && styles.selectedButtonText,
              ]}
            >
              FR
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterOptions}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedGender === 'Male' && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender('Male')}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedGender === 'Male' && styles.selectedButtonText,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <Text style={styles.pipeSeparator}>|</Text>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedGender === 'Female' && styles.selectedButton,
            ]}
            onPress={() => setSelectedGender('Female')}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedGender === 'Female' && styles.selectedButtonText,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={teamMembers}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.therapistTile}>
            <View
              style={[
                styles.headerTag,
                { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
              ]}
            >
              <Text style={{ color: 'white' }}>Individual, Couple</Text>
            </View>
            <Image source={item.image} style={styles.therapistImage} />
            <View style={styles.therapistInfo}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Text style={styles.therapistName}>{item.name}</Text>
                <View
                  style={{
                    backgroundColor: '#EBF5F5',
                    padding: 8,
                    borderRadius: 15,
                  }}
                >
                  <Text style={styles.therapistTags}>{item.tags}</Text>
                </View>
              </View>
              <Text style={styles.therapistSubTags}>{item.subTags}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Text
                  style={styles.therapistDetails}
                >{`${item.years} | ${item.location} | ${item.languages}`}</Text>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => navigation.navigate('TherapistFormScreen')}
                >
                  <Text style={styles.bookButtonText}>BOOK WITH ME!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => `therapist-${index}`}
      />
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Text style={styles.paginationButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.paginationCurrentPage}>{currentPage}</Text>
        <TouchableOpacity
          style={styles.paginationButton}
          onPress={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(teamMembers.length / 2)}
        >
          <Text style={styles.paginationButtonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F7F7F7',
  },
  headerBackground: {
    width: '100%',
    height: 180,
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
  },
  headerIcon: {
    width: 300,
    height: 150,
    position: 'absolute',
    bottom: 5,
    right: 45,
  },

  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterByText: {
    fontSize: 12,
  },
  resetFilterText: {
    fontSize: 12,
  },
  filterContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  pipeSeparator: {
    marginHorizontal: 3,
  },
  selectedButton: {
    backgroundColor: '#B1C181',
  },
  filterButtonText: {
    fontSize: 14,
  },
  selectedButtonText: {
    color: 'white',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  therapistTile: {
    flexDirection: 'row',
    backgroundColor: '#FBFCF4',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    marginHorizontal: 10,
  },
  therapistImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'center',
  },
  therapistInfo: {
    flex: 1,
    marginTop: '7%',
  },
  therapistName: {
    fontSize: 18,
    fontWeight: '600',
  },
  therapistTags: {
    fontSize: 12,
    color: '#638568',
  },
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  therapistSubTags: {
    fontSize: 12,
    color: '#5C5C5C',
    marginBottom: 5,
  },
  therapistDetails: {
    fontSize: 10,
    color: '#5C5C5C',
    borderWidth: 1.2,
    borderColor: '#E8E8F1',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  bookButton: {
    backgroundColor: '#B1C181',
    padding: 5,
    borderRadius: 7,
    paddingVertical: 8,
  },
  bookButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  paginationButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  paginationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationCurrentPage: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default OurTeamListScreen;

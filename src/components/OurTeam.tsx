import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

interface Doctor {
  id: string;
  image: string;
  name: string;
  designation: string;
  specialties: string[];
  description: string;
  experience: string;
  price1: string;
  price2: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    image: require('../../assets/images/doctor.png'),
    name: 'doctorName',
    designation: 'designation',
    specialties: [
      'specialties.depression',
      'specialties.anxiety',
      'specialties.adhd',
      'specialties.ocd',
    ],
    description: 'description',
    experience: 'yearsExperience',
    price1: 'price1',
    price2: 'price2',
  },
  {
    id: '2',
    image: require('../../assets/images/doctor.png'),
    name: 'doctorName',
    designation: 'designation',
    specialties: [
      'specialties.depression',
      'specialties.anxiety',
      'specialties.adhd',
      'specialties.ocd',
    ],
    description: 'description',
    experience: 'yearsExperience',
    price1: 'price1',
    price2: 'price2',
  },
  {
    id: '3',
    image: require('../../assets/images/doctor.png'),
    name: 'doctorName',
    designation: 'designation',
    specialties: [
      'specialties.depression',
      'specialties.anxiety',
      'specialties.adhd',
      'specialties.ocd',
    ],
    description: 'description',
    experience: 'yearsExperience',
    price1: 'price1',
    price2: 'price2',
  },
  // Add more doctors as needed
];

const OurTeam: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const renderItem = ({ item }: { item: Doctor }) => (
    <View style={styles.card}>
      <View
        style={[
          styles.headerTag,
          { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
        ]}
      >
        <Text style={{ color: 'white' }}>{t('ourteam.individualCouple')}</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/doctor.png')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{t(`ourteam.${item.name}`)}</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EBF5F5',
                paddingHorizontal: 15,
                borderRadius: 15,
                marginHorizontal: 8,
              }}
            >
              <Text style={styles.therapistTags}>
                {t(`ourteam.${item.designation}`)}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.specialties}>
              {item.specialties
                .map((specialty) => t(`ourteam.${specialty}`))
                .join(', ')}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{t(`ourteam.${item.description}`)}</Text>
      <View style={styles.experienceContainer}>
        <Text style={styles.experience}>{t(`ourteam.${item.experience}`)}</Text>
      </View>
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
            {t(`ourteam.${item.price1}`)}
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
            {t(`ourteam.${item.price2}`)}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TherapistFormScreen')}
      >
        <Text style={styles.buttonText}>{t('ourteam.bookWithMe')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('ourteam.title')}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OurTeamListScreen');
          }}
        >
          <Text style={styles.viewAll}>{t('ourteam.viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
  },
  viewAll: {
    fontSize: 14,
    color: '#52525B',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginRight: 16,
    width: 330,
  },
  tagContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#E6F5EA',
    padding: 4,
    borderRadius: 4,
    borderColor: 'black',
  },
  tag: {
    color: '#B1C181',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  designation: {
    fontSize: 16,
    color: '#888888',
  },
  specialties: {
    fontSize: 14,
    color: '#888888',
    marginVertical: 4,
  

  },
  description: {
    fontSize: 14,
    marginVertical: 4,

   
  },
  experienceContainer: {
    width: '80%',
    borderRadius: 25,
    marginTop: 8,
    alignItems: 'center',
    borderWidth: 0.2,
    paddingHorizontal: 7,
    paddingVertical: 10,
    
  },
  experience: {
    color: '#555555',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
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
  },
  therapistTags: {
    fontSize: 11,
    color: '#638568',
  },
  packageText: {
    fontSize: 14,
    color: '#1E1F24',
  },
  packageBoxSelected: {
    backgroundColor: '#9DB8A1',
  },
  packageTextSelected: {
    color: '#FFFFFF',
  },
  price1: {
    color: '#B1C181',
  },
  price2: {
    color: '#B1C181',
  },
  button: {
    backgroundColor: '#B1C181',
    borderRadius: 10,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default OurTeam;

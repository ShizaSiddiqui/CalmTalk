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

const AssessmentsScreen = () => {
  const navigation = useNavigation();
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
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Assessments</Text>
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
              title: 'Depression By PHQ-9',
            })
          }
        >
          <View style={styles.assessmentText}>
            <Text style={styles.assessmentTitle}>Depression By PHQ-9</Text>
            <Text style={styles.assessmentDescription}>
              Your therapist will build emotional bound with you by ask what
              struggling with, medical background.
            </Text>
            <Text style={styles.assessmentDuration}>10 Minutes</Text>
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
              title: 'Anxiety By Zung',
            })
          }
        >
          <View style={styles.assessmentText}>
            <Text style={styles.assessmentTitle}>Anxiety by zung</Text>
            <Text style={styles.assessmentDescription}>
              Your therapist will build emotional bound with you by ask what
              struggling with, medical background.
            </Text>
            <Text style={styles.assessmentDuration}>10 Minutes</Text>
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
              title: 'Anger Management',
            })
          }
        >
          <View style={styles.assessmentText}>
            <Text style={styles.assessmentTitle}>Anger management</Text>
            <Text style={styles.assessmentDescription}>
              Your therapist will build emotional bound with you by ask what
              struggling with, medical background.
            </Text>
            <Text style={styles.assessmentDuration}>10 Minutes</Text>
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

    // backgroundColor: '#F5F5F5',
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

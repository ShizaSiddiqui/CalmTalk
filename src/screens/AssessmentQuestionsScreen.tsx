import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const AssessmentQuestionsScreen = () => {
  const navigation = useNavigation();

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleAgeGroupSelection = (ageGroup) => {
    setSelectedAgeGroup(ageGroup);
  };

  const handleNext = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={[styles.backIcon, { transform: transformStyle }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Question 10 of 20</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/images/modal_close.png')}
              style={[styles.closeIcon, { transform: transformStyle }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>What is your age group</Text>
          <TouchableOpacity
            style={[
              styles.ageGroupButton,
              selectedAgeGroup === '18-29' && styles.selectedAgeGroup,
            ]}
            onPress={() => handleAgeGroupSelection('18-29')}
          >
            <Text style={styles.ageGroupButtonText}>18 - 29</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.ageGroupButton,
              selectedAgeGroup === '30-49' && styles.selectedAgeGroup,
            ]}
            onPress={() => handleAgeGroupSelection('30-49')}
          >
            <Text style={styles.ageGroupButtonText}>30 - 49</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.ageGroupButton,
              selectedAgeGroup === '50-69' && styles.selectedAgeGroup,
            ]}
            onPress={() => handleAgeGroupSelection('50-69')}
          >
            <Text style={styles.ageGroupButtonText}>50 - 69</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.ageGroupButton,
              selectedAgeGroup === '70-89' && styles.selectedAgeGroup,
            ]}
            onPress={() => handleAgeGroupSelection('70-89')}
          >
            <Text style={styles.ageGroupButtonText}>70 - 89</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <Modal
          visible={showModal}
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View style={styles.modalContainer}>
              <View style={styles.resultContainer}>
                <Image
                  source={require('../../assets/images/assessment_result.png')}
                  style={styles.resultIcon}
                  resizeMode="contain"
                />
                <Text style={styles.resultText}>Result</Text>
                <Text style={styles.resultScore}>20/30</Text>
                <Text style={styles.resultDescription}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 5,
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    // Add your close button styling here
  },
  modalContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
    alignSelf: 'center',
    justifyContent: 'center',

    flex: 1,
  },
  questionContainer: {
    padding: 25,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  ageGroupButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedAgeGroup: {
    backgroundColor: '#B1C181',
  },
  ageGroupButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  resultContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    // borderWidth:1,
    borderRadius: 20,
  },
  resultIcon: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 5,
  },
  resultScore: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultDescription: {
    fontSize: 10,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 14,
    color: '#888A95',
  },
  nextButton: {
    padding: 15,
    backgroundColor: '#B1C181',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    fontSize: 12,
  },
});

export default AssessmentQuestionsScreen;

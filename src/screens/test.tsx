import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const DepressionByPHQScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/depression_by_PHQ.png')}
          style={styles.illustration}
        />
        <View style={styles.timeContainer}>
          <Image
            source={require('../../assets/images/clock-icon.png')}
            style={styles.timeIcon}
          />
          <Text style={styles.timeText}>10 minutes</Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About Assessment</Text>
          <Text style={styles.aboutText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
        </View>
        <View style={styles.previousContainer}>
          <Text style={styles.previousTitle}>Previous Assessment</Text>
          <View style={styles.previousItem}>
            <View style={styles.previousDateContainer}>
              <Image
                source={require('../../assets/images/calendar-icon.png')}
                style={styles.calendarIcon}
              />
              <Text style={styles.previousDate}>Date 14 Aug 2k24</Text>
            </View>
            <Text style={styles.previousResult}>20/30</Text>
          </View>
          <View style={styles.previousItem}>
            <View style={styles.previousDateContainer}>
              <Image
                source={require('../../assets/images/calendar-icon.png')}
                style={styles.calendarIcon}
              />
              <Text style={styles.previousDate}>Date 14 Aug 2k24</Text>
            </View>
            <Text style={styles.previousResult}>20/30</Text>
          </View>
          <View style={styles.previousItem}>
            <View style={styles.previousDateContainer}>
              <Image
                source={require('../../assets/images/calendar-icon.png')}
                style={styles.calendarIcon}
              />
              <Text style={styles.previousDate}>Date 14 Aug 2k24</Text>
            </View>
            <Text style={styles.previousResult}>20/30</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Assessment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    // Add your back button styling here
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  content: {
    padding: 20,
  },
  illustration: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  timeIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  timeText: {
    fontSize: 16,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
  },
  previousContainer: {
    marginBottom: 20,
  },
  previousTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  previousItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  previousDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  previousDate: {
    fontSize: 16,
  },
  previousResult: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#B1C181',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DepressionByPHQScreen;

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const moods = ['Recommended', 'Calm', 'Sleepy', 'Moody', 'Motivated'];

const meditations = [
  {
    id: '1',
    image: require('../../assets/images/play.png'),
    title: 'Love kind meditation',
    duration: '16:45',
  },
  {
    id: '2',
    image: require('../../assets/images/play.png'),
    title: 'Relaxing Waves',
    duration: '12:30',
  },
  {
    id: '3',
    image: require('../../assets/images/play.png'),
    title: 'Mindful Breathing',
    duration: '10:00',
  },
];

const { width } = Dimensions.get('window');

const CalmMusic: React.FC = () => {
  const [activeMood, setActiveMood] = useState(moods[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const renderMoodItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.moodButton,
        activeMood === item
          ? styles.activeMoodButton
          : styles.inactiveMoodButton,
      ]}
      onPress={() => setActiveMood(item)}
    >
      <Text
        style={[
          styles.moodText,
          activeMood === item ? styles.activeMoodText : styles.inactiveMoodText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderMeditationItem = ({
    item,
  }: {
    item: (typeof meditations)[0];
  }) => (
    <View style={styles.meditationCard}>
      <Image source={item.image} style={styles.meditationImage} />
      <View style={styles.meditationTextContainer}>
        <Text style={styles.meditationTitle}>{item.title}</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>
      <Text style={styles.meditationDuration}>{item.duration}</Text>
    </View>
  );

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/background_express_and_chat.png')}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Calm Music</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all &gt;</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={moods}
          renderItem={renderMoodItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          horizontal
          data={meditations}
          renderItem={renderMeditationItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          ref={flatListRef}
        />
      </ImageBackground>
      <View style={styles.indicatorContainer}>
        {meditations.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              activeIndex === index
                ? styles.activeIndicator
                : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 280,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: '10%',
  },
  headerTitle: {
    fontSize: 20,
  },
  viewAll: {
    fontSize: 14,
    color: '#52525B',
  },
  moodButton: {
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeMoodButton: {
    backgroundColor: '#9DB8A1',
  },
  inactiveMoodButton: {
    // backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderColor: '#09090B33',
  },
  moodText: {
    fontSize: 14,
  },
  activeMoodText: {
    color: '#FFFFFF',
  },
  inactiveMoodText: {
    color: '#09090B99',
  },
  meditationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 64, // Adjust the width to fit within the screen with padding
    marginRight: 16,
    borderColor: '#E5DFFE',
    borderWidth: 1,
    height: '80%',
  },
  meditationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  meditationTextContainer: {
    flex: 1,
  },
  meditationTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginHorizontal: 8,
  },
  progressBarContainer: {
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    height: 5,
    marginTop: 8,
    marginHorizontal: 8,
  },
  progressBar: {
    backgroundColor: '#9DB8A1',
    borderRadius: 5,
    height: 5,
    width: '50%', // Adjust this based on the actual progress
  },
  meditationDuration: {
    fontSize: 16,
    color: '#09090B',
    // marginHorizontal:5
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  indicator: {
    width: 15,
    height: 3,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 2,
  },
  activeIndicator: {
    backgroundColor: '#9DB8A1',
    width: 33,
  },
  inactiveIndicator: {
    backgroundColor: '#E6E6E6',
  },
});

export default CalmMusic;

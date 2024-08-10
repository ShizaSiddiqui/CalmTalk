import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  I18nManager,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const moods = [
  'recommended',
  'recommended',
  'recommended',
  'calm',
  'sleepy',
  'moody',
  'motivated',
];

const meditations = [
  {
    id: '1',
    image: require('../../assets/images/play.png'),
    title: 'loveKindMeditation',
    duration: '16:45',
  },
  {
    id: '2',
    image: require('../../assets/images/play.png'),
    title: 'relaxingWaves',
    duration: '12:30',
  },
  {
    id: '3',
    image: require('../../assets/images/play.png'),
    title: 'mindfulBreathing',
    duration: '10:00',
  },
];

const ForYou: React.FC = () => {
  const [activeMood, setActiveMood] = useState(moods[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { t } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const alignItemStyle = isRTL ? 'flex-start' : null;

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
        {t(`foryou.${item}`)}
      </Text>
    </TouchableOpacity>
  );

  const renderMeditationItem = ({
    item,
  }: {
    item: (typeof meditations)[0];
  }) => (
    <TouchableOpacity style={styles.meditationCard}>
      <Image source={item.image} style={styles.meditationImage} />
      <View
        style={[styles.meditationTextContainer, { alignItems: alignItemStyle }]}
      >
        <Text style={styles.meditationTitle}>{t(`foryou.${item.title}`)}</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>
      <Text style={styles.meditationDuration}>
        {t('foryou.duration', { duration: item.duration })}
      </Text>
    </TouchableOpacity>
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('foryou.title')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('foryou.viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={moods}
        renderItem={renderMoodItem}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        style={{ alignSelf: isRTL ? 'flex-start' : null }}
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
        style={{ flex: 1 }}
      />
      <View style={[styles.indicatorContainer]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#52525B',
  },
  moodButton: {
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 16,
  },
  activeMoodButton: {
    backgroundColor: '#9DB8A1',
  },
  inactiveMoodButton: {
    borderWidth: 1,
    borderColor: '#DDDEE4',
  },
  moodText: {
    fontSize: 14,
  },
  activeMoodText: {
    color: '#FFFFFF',
  },
  inactiveMoodText: {
    color: '#5F616A',
  },
  meditationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 64, // Adjust the width to fit within the screen with padding
    marginRight: 16,
    borderColor: '#E5DFFE',
    borderWidth: 1,
  },
  meditationImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 16,
  },
  meditationTextContainer: {
    flex: 1,
  },
  meditationTitle: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  progressBarContainer: {
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    height: 5,
    width: '85%',
    marginTop: 8,
    marginHorizontal: 8,
  },
  progressBar: {
    backgroundColor: '#9DB8A1',
    borderRadius: 5,
    height: 5,
    width: '50%',
  },
  meditationDuration: {
    fontSize: 16,
    color: '#09090B',
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

export default ForYou;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  I18nManager,
} from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';

const pathways = [
  {
    id: '1',
    progress: 64,
    day: 1,
    totalDays: 10,
    title: 'positivityPathway',
  },
  {
    id: '2',
    progress: 64,
    day: 1,
    totalDays: 10,
    title: 'positivityPathway',
  },
  {
    id: '3',
    progress: 64,
    day: 1,
    totalDays: 10,
    title: 'positivityPathway',
  },
  // Add more pathways as needed
];

const { width } = Dimensions.get('window');

const Pathway: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const isRTL = I18nManager.isRTL;
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const nearestOffset = Math.round(offset / width) * width;
    setScrollOffset(nearestOffset);
  };
  const alignItemStyle = isRTL ? 'flex-start' : 'flex-end';

  const renderPathwayItem = ({ item }: { item: (typeof pathways)[0] }) => (
    <View style={styles.pathwayCard}>
      <View
        style={[
          styles.headerTag,
          { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
        ]}
      >
        <Text style={{ color: 'white', fontSize: 10 }}>
          {t('pathway.active')}
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <Svg height="60" width="60" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="#E6E6E6"
            strokeWidth="10"
            fill="none"
          />
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="#9DB8A1"
            strokeWidth="10"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 45 * (item.progress / 100)}, ${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * 0.25}`} // Adjust this for progress direction
          />
          <SvgText
            x="50"
            y="55"
            fontSize="20"
            fill="#9DB8A1"
            textAnchor="middle"
          >
            {`${item.progress}%`}
          </SvgText>
        </Svg>
      </View>

      <View
        style={[styles.pathwayTextContainer, { alignItems: alignItemStyle }]}
      >
        <Text style={styles.pathwayDay}>
          {t('pathway.day', { day: item.day, totalDays: item.totalDays })}
        </Text>
        <Text style={styles.pathwayTitle}>{t(`pathway.${item.title}`)}</Text>
      </View>
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t('pathway.title')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('pathway.viewAll')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={pathways}
        renderItem={renderPathwayItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        onScroll={handleScroll}
        scrollEventThrottle={1}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.indicatorContainer}>
        {pathways.map((_, index) => (
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
  pathwayCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 64,
    marginRight: 16,
  },
  progressContainer: {
    marginRight: 16,
  },
  pathwayTextContainer: {
    flex: 1,
  },
  pathwayDay: {
    fontSize: 14,
    color: '#52525B',
    paddingBottom: 5,
  },
  pathwayTitle: {
    fontSize: 16,
  },
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
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

export default Pathway;

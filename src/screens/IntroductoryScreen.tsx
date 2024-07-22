import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  I18nManager,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNRestart from 'react-native-restart';
import i18n from '../../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

const { width: screenWidth } = Dimensions.get('window');

const getCarouselItems = () => [
  {
    image: require('../../assets/images/intro-screen-1.png'),
    subtext: i18n.t('carousel.slide1'),
  },
  {
    image: require('../../assets/images/intro-screen-2.png'),
    subtext: i18n.t('carousel.slide2'),
  },
  {
    image: require('../../assets/images/intro-screen-3.png'),
    subtext: i18n.t('carousel.slide3'),
  },
  {
    image: require('../../assets/images/intro-screen-4.png'),
    subtext: i18n.t('carousel.slide4'),
  },
];

const LanguageSwitcher = ({ setCarouselItems }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const switchLanguage = async (language) => {
    try {
      setSelectedLanguage(language);
      await i18n.changeLanguage(language);
      const isRTL = language === 'ar';
      I18nManager.forceRTL(isRTL);
      if (I18nManager.isRTL !== isRTL) {
        RNRestart.restart();
      }
      setCarouselItems(getCarouselItems());
    } catch (error) {
      console.error('Failed to switch language:', error);
      Alert.alert('Error', 'Failed to switch language. Please try again.');
    }
  };

  return (
    <View style={styles.languageSwitcherContainer}>
      <RNPickerSelect
        value={selectedLanguage}
        onValueChange={(value) => switchLanguage(value)}
        items={[
          { label: 'English', value: 'en' },
          { label: 'العربية', value: 'ar' },
        ]}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const Pagination = ({ index, carouselItems }) => {
  return (
    <View style={styles.paginationContainer}>
      {carouselItems.map((_, i) => (
        <View
          key={i}
          style={[
            styles.paginationDot,
            index === i ? styles.activeDot : styles.inactiveDot,
            index === i && styles.activeDotExtraWidth,
          ]}
        />
      ))}
    </View>
  );
};

const SkipButton = ({ onPress }) => (
  <TouchableOpacity style={styles.skipButton} onPress={onPress}>
    <Text style={styles.bottomButtonText}>{i18n.t('buttons.skip')}</Text>
  </TouchableOpacity>
);

const NextButton = ({ onPress }) => (
  <TouchableOpacity style={styles.nextButton} onPress={onPress}>
    <Text style={styles.bottomButtonText}>{i18n.t('buttons.next')}</Text>
  </TouchableOpacity>
);

const IntroductoryScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(getCarouselItems());
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    setCarouselItems(getCarouselItems());
  }, [i18n.language]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode={'contain'} />
      <Text style={styles.subtext}>{item.subtext}</Text>
    </View>
  );

  const handleNext = () => {
    if (activeIndex < carouselItems.length - 1) {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: activeIndex + 1 });
      }
      setActiveIndex(activeIndex + 1);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LanguageSwitcher setCarouselItems={setCarouselItems} />

      <FlatList
        ref={flatListRef}
        data={carouselItems}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x / screenWidth,
          );
          setActiveIndex(index);
        }}
        showsHorizontalScrollIndicator={false}
      />
      <Pagination index={activeIndex} carouselItems={carouselItems} />

      <View style={styles.buttonContainer}>
        <SkipButton onPress={() => navigation.navigate('Login')} />
        <NextButton onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageSwitcherContainer: {
    width: '100%',
    marginBottom: 10,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  subtext: {
    marginTop: 40,
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 50,
  },
  paginationDot: {
    width: 11,
    height: 11,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#B9C78F',
  },
  inactiveDot: {
    backgroundColor: '#E4E4E7',
  },
  activeDotExtraWidth: {
    width: 33,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  skipButton: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#B1C18180',
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  nextButton: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#B1C181',
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  bottomButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '20%',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    color: 'black',
    // paddingRight: 30,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default IntroductoryScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  I18nManager,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';

const TherapistSpeaksScreen = () => {
  const navigation = useNavigation();

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

  const data = [
    {
      image: require('../../assets/images/blog4.png'),
      title: t('therapistSpeaks.title1'),
    },
    {
      image: require('../../assets/images/blog4.png'),
      title: t('therapistSpeaks.title2'),
    },
    {
      image: require('../../assets/images/blog4.png'),
      title: t('therapistSpeaks.title3'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
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
              style={[styles.backArrow, { transform: transformStyle }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {t('therapistSpeaks.screenTitle')}
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/social-anxiety.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={[styles.textContainer]}>
          <Text style={[styles.title, { textAlign: textAlignStyle }]}>
            {t('therapistSpeaks.mainTitle')}
          </Text>
          <Text style={[styles.text, { textAlign: textAlignStyle }]}>
            {t('therapistSpeaks.mainText')}
          </Text>
        </View>
        <Text style={[styles.otherPostsText, { textAlign: textAlignStyle }]}>
          {t('therapistSpeaks.otherPostsText')}
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                marginVertical: 10,
                borderRadius: 10,
                elevation: 2,
              }}
            >
              <TouchableOpacity style={styles.otherPost}>
                <View style={styles.otherPostImageContainer}>
                  <Image
                    source={item.image}
                    style={styles.otherPostImage}
                    // resizeMode='cover'
                  />
                  <View style={styles.generalTopic}>
                    <Text style={styles.generalTopicText}>
                      {t('therapistSpeaks.generalTopic')}
                    </Text>
                  </View>
                </View>
                <Text
                  style={[styles.otherPostText, { textAlign: textAlignStyle }]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: 200,
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
  },

  content: {
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  generalTopic: {
    backgroundColor: '#FFD7D6',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalTopicText: {
    color: '#E65F59',
    fontSize: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#232323',
  },
  textContainer: {
    borderBottomColor: '#71717A40',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 27,
    marginBottom: 20,
    color: '#5C5C5C',
  },
  otherPostsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  otherPost: {
    width: '50%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    // elevation: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherPostImageContainer: {
    alignItems: 'center',
  },
  otherPostImage: {
    width: 150,
    height: 120,
    padding: 10,
    borderRadius: 10,
  },
  otherPostText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default TherapistSpeaksScreen;

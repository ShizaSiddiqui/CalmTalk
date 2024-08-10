import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  I18nManager,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';

const CategoryListScreen = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];
  const alignSelfStyle = isRTL ? 'flex-start' : null;
  const data = {
    product: [
      {
        title: t('categoriesList.title1'),
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: t('categoriesList.title1'),
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: t('categoriesList.title1'),
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: t('categoriesList.title1'),
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: t('categoriesList.title1'),
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: t('categoriesList.title1'),
        image: require('../../assets/images/highlighted_products.png'),
      },
      // Add more product data here
    ],
  };
  const navigation = useNavigation();

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
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/images/search.png')}
              style={styles.icon}
            />
            <TextInput
              style={[
                styles.searchInput,
                { textAlign: isRTL ? 'right' : null },
              ]}
              placeholder={t('categoriesList.search')}
              placeholderTextColor={'#23232399'}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={[styles.title, { textAlign: textAlignStyle }]}>
          {t('categoriesList.aromaTherapyProducts')}
        </Text>

        <FlatList
          data={data.product}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.productTile}
              onPress={() => navigation.navigate('ProductItemFormScreen')}
            >
              <View
                style={[
                  styles.headerTag,
                  { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
                ]}
              >
                <Text style={{ color: 'white', fontSize: 10 }}>
                  {t('categoriesList.aromaTherapy')}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  backgroundColor: '#B1C1814D',
                }}
              >
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Image
                    source={require('../../assets/images/most_recent_blogs_heart.png')}
                    style={{
                      width: 45,
                      height: 45,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Image
                  source={item.image}
                  style={styles.productImage}
                  resizeMode="contain"
                />
              </View>

              <View style={{ paddingVertical: 10 }}>
                <Text
                  style={[styles.productText, { textAlign: textAlignStyle }]}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          numColumns={2}
          columnWrapperStyle={styles.row}
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
    paddingTop: '6%',
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
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  productTile: {
    flex: 1,
    width: '50%',
    height: 170,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 2,
    marginLeft: 7,
    tintColor: '#232323',
  },
  productText: {
    fontWeight: '600',
    fontSize: 13,
    paddingHorizontal: 7,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 80,
    marginTop: 40,
  },
  searchContainer: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B1C18199',
  },
  searchInput: {
    flex: 1,
    padding: 10,
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
    elevation: 2,
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
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});

export default CategoryListScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HighlightedProductsTile from '../components/HighlightedProductsTile';
const ProductCategoriesScreen = () => {
  const navigation = useNavigation();
  const productTopic = ['All', 'New', 'Popular'];
  const [activeBlogTopic, setActiveBlogTopic] = useState(productTopic[0]);

  const data = {
    product: [
      {
        title: 'Lavender Essential Oil - 5 Fluid Ounce',
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: 'Lavender Essential Oil - 5 Fluid Ounce',
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: 'Lavender Essential Oil - 5 Fluid Ounce',
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: 'Lavender Essential Oil - 5 Fluid Ounce',
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: 'Lavender Essential Oil - 5 Fluid Ounce',
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: 'Lavender Essential Oil - 5 Fluid Ounce',
        image: require('../../assets/images/highlighted_products.png'),
      },
      // Add more product data here
    ],
    allProducts: [
      {
        title: 'Lavender Oil',
        subText: 'Promotes relaxation, Eases anxiety, Improves mood',
        image: require('../../assets/images/highlighted_products.png'),
      },
      {
        title: 'Lavender Oil',
        subText: 'Promotes relaxation, Eases anxiety, Improves mood',
        image: require('../../assets/images/highlighted_products.png'),
      },
      // Add more therapy courses data here
    ],
  };
  const renderProductTopicItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.productTopicButton,
        activeBlogTopic === item
          ? styles.activeBlogTopicButton
          : styles.inactiveBlogTopicButton,
      ]}
      onPress={() => setActiveBlogTopic(item)}
    >
      <Text
        style={[
          styles.productTopicText,
          activeBlogTopic === item
            ? styles.activeBlogTopicText
            : styles.inactiveBlogTopicText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require('../../assets/images/back.png')}
                style={styles.backIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Products</Text>
          </View>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => navigation.navigate('BlogsFavoriteScreen')}
          >
            <Text style={styles.favoriteButtonText}>Favorites</Text>
            <Image
              source={require('../../assets/images/favorite.png')}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </View>

        <ImageBackground
          style={styles.mostRecentProductsContainer}
          source={require('../../assets/images/category_background.png')}
        >
          <View style={styles.mostRecentProductsHeader}>
            <Text style={styles.mostRecentProductsHeaderTitle}>Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CategoryListScreen')}
            >
              <Text style={{ fontSize: 14 }}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categories}>
            <FlatList
              data={[
                {
                  image: require('../../assets/images/product_categories.png'),
                  title: 'Aroma therapy',
                },
                {
                  image: require('../../assets/images/product_categories.png'),
                  title: 'Candles',
                },
                {
                  image: require('../../assets/images/product_categories.png'),
                  title: 'Ebooks',
                },
                {
                  image: require('../../assets/images/product_categories.png'),
                  title: 'Herbal teas',
                },
                {
                  image: require('../../assets/images/product_categories.png'),
                  title: 'Comfort items',
                },
              ]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.categoryItem}>
                  <Image
                    source={item.image}
                    style={styles.categoryImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.categoryTitle}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.title}
              //   columnWrapperStyle={styles.row}
            />
          </View>
        </ImageBackground>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Highlighted Products</Text>
        </View>
        <FlatList
          data={data.allProducts}
          horizontal
          renderItem={({ item }) => (
            <HighlightedProductsTile
              title={item.title}
              subText={item.subText}
              image={item.image}
              onPress={() => {
                // Handle onPress action for therapy course item
                console.log('Therapy course item pressed:', item.title);
              }}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `course-${index}`}
        />

        <View style={styles.recentProductsContainer}>
          <Text style={styles.recentProductsTitle}>All Products</Text>
          <FlatList
            horizontal
            data={productTopic}
            renderItem={renderProductTopicItem}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
          />
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
                  <Text style={{ color: 'white' }}>Aroma therapy</Text>
                </View>
                <View style={{ width: '100%' }}>
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

                <Text style={styles.productText}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F8F8',
    // marginTop: '10%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginLeft: -16,
    paddingRight: 16,
  },
  backIcon: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  productTopicButton: {
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  activeBlogTopicButton: {
    backgroundColor: '#9DB8A1',
  },
  inactiveBlogTopicButton: {
    borderWidth: 1,
    borderColor: '#DDDEE4',
  },
  productTopicText: {
    fontSize: 14,
  },
  activeBlogTopicText: {
    color: '#FFFFFF',
  },
  inactiveBlogTopicText: {
    color: '#232323',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    // fontWeight: '600',
  },
  sectionLink: {
    fontSize: 14,
    color: '#52525B',
  },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDEE4',
    marginRight: 50,
  },
  tabText: {
    fontSize: 14,
    color: '#555555',
  },
  mostRecentProductsContainer: {
    height: 200,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  mostRecentProductsHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  mostRecentProductsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
    // marginBottom: 16,
  },

  mostRecentProductsImage: {
    width: 150,
    height: 150,
  },
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // zIndex: 1,
  },

  mostReadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mostReadBlog: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  productTile: {
    flex: 1,
    width: '50%',
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 10,
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
  productImage: {
    width: '100%',
    height: 80,
    marginTop: 40,
  },
  iconBlogLink: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
  productLinkTouch: {
    position: 'absolute',
    bottom: 5,
    left: 2,
  },
  productText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 20,
  },

  recentProductsContainer: {
    // padding: 20,
  },
  recentProductsTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  productItemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  productItemContent: {
    padding: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  favoriteButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    width: 15,
    height: 15,
    marginHorizontal: 7,
    tintColor: '#9DB8A1',
  },
  favoriteButtonText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#808D57',
  },

  flatListItem: {
    flexDirection: 'row',
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 5,
    marginRight: 10,
  },
  flatListImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'center',
  },
  flatListText: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#232323',
  },
  flatListTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#232323',
    width: '70%',
  },
  flatListContent: {
    fontSize: 12,
    color: '#666',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  categoryItem: {
    width: 75,
    paddingHorizontal: 10,
    height: '40%',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default ProductCategoriesScreen;

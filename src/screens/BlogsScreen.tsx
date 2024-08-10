import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  I18nManager,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native-gesture-handler';

const BlogsScreen = () => {
  const navigation = useNavigation();

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

  const blogTopic = [
    t('blogsScreen.blogTopic.all'),
    t('blogsScreen.blogTopic.generalTopics'),
    t('blogsScreen.blogTopic.depression'),
    t('blogsScreen.blogTopic.parenting'),
    t('blogsScreen.blogTopic.other'),
    t('blogsScreen.blogTopic.other'),
    t('blogsScreen.blogTopic.other'),
  ];
  const [activeBlogTopic, setActiveBlogTopic] = useState(blogTopic[0]);

  const [blog, setBlog] = useState([
    {
      title: t('blogsScreen.blog.title1'),
      image: require('../../assets/images/blog1.png'),
    },
    {
      title: t('blogsScreen.blog.title2'),
      image: require('../../assets/images/blog2.png'),
    },
    {
      title: t('blogsScreen.blog.title3'),
      image: require('../../assets/images/blog5.png'),
    },
    {
      title: t('blogsScreen.blog.title4'),
      image: require('../../assets/images/blog3.png'),
    },
    {
      title: t('blogsScreen.blog.title5'),
      image: require('../../assets/images/blog4.png'),
    },
    {
      title: t('blogsScreen.blog.title6'),
      image: require('../../assets/images/blog6.png'),
    },
    // Add more blog data here
  ]);

  const renderBlogTopicItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.blogTopicButton,
        activeBlogTopic === item
          ? styles.activeBlogTopicButton
          : styles.inactiveBlogTopicButton,
      ]}
      onPress={() => setActiveBlogTopic(item)}
    >
      <Text
        style={[
          styles.blogTopicText,
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
          <Text style={styles.title}>{t('blogsScreen.title')}</Text>
        </View>
        <View style={{ marginLeft: 12 }}>
          <FlatList
            horizontal
            data={blogTopic}
            renderItem={renderBlogTopicItem}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <ImageBackground
          style={styles.mostRecentBlogsContainer}
          source={require('../../assets/images/background_express_and_chat.png')}
        >
          <View style={styles.mostRecentBlogsHeader}>
            <Text style={styles.mostRecentBlogsHeaderTitle}>
              {t('blogsScreen.mostRecentBlog')}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.flatListItem}
            onPress={() => {
              navigation.navigate('BlogsReadViewScreen');
            }}
          >
            <Image
              source={require('../../assets/images/blog1.png')}
              style={styles.flatListImage}
              resizeMode="contain"
            />
            <View style={styles.flatListText}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={[styles.flatListTitle, { textAlign: textAlignStyle }]}
                >
                  {t('blogsScreen.blog.title1')}
                </Text>
                <Image
                  source={require('../../assets/images/most_recent_blogs_heart.png')}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
              </View>
              <Image
                source={require('../../assets/images/most_recent_blogs_link.png')}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.recentBlogsContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.recentBlogsTitle}>
              {t('blogsScreen.recentBlogs')}
            </Text>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => navigation.navigate('BlogsFavoriteScreen')}
            >
              <Text style={styles.favoriteButtonText}>
                {t('blogsScreen.favoriteBlogs')}
              </Text>
              <Image
                source={require('../../assets/images/favorite.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={blog}
            numColumns={2}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.blogTile,
                  {
                    marginTop: index % 2 === 1 ? 30 : 0,
                  },
                ]}
              >
                <TouchableOpacity
                  style={{ position: 'absolute', right: 0, top: 0, zIndex: 1 }}
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
                  style={styles.blogImage}
                  resizeMode="contain"
                />
                <Text style={[styles.blogText, { textAlign: textAlignStyle }]}>
                  {item.title}
                </Text>
                <TouchableOpacity
                  style={styles.blogLinkTouch}
                  onPress={() => navigation.navigate('BlogsReadViewScreen')}
                >
                  <Image
                    source={require('../../assets/images/most_recent_blogs_link.png')}
                    style={styles.iconBlogLink}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  blogTopicButton: {
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
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
  blogTopicText: {
    fontSize: 14,
  },
  activeBlogTopicText: {
    color: '#FFFFFF',
  },
  inactiveBlogTopicText: {
    color: '#232323',
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
  mostRecentBlogsContainer: {
    height: 300,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  mostRecentBlogsHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mostRecentBlogsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  blogTile: {
    flex: 1,
    width: '50%',
    height: 230,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 8,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '12%',
    paddingTop: '3%',
  },
  blogImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  iconBlogLink: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
  blogLinkTouch: {
    position: 'absolute',
    bottom: 5,
    left: 2,
  },
  blogText: {
    fontWeight: '600',
    fontSize: 14,
    paddingBottom: 10,
  },

  recentBlogsContainer: {
    padding: 20,
  },
  recentBlogsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  blogItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  blogItemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  blogItemContent: {
    padding: 10,
  },
  blogTitle: {
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
    marginHorizontal: 10,
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
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 8,
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
});

export default BlogsScreen;

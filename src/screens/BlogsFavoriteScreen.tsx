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

const BlogsFavoriteScreen = () => {
  const navigation = useNavigation();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const textAlignStyle = isRTL ? 'left' : null;
  const alignItemStyle = isRTL ? 'flex-start' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];

  const blogTopic = [
    t('blogsFavoriteScreen.blogTopic.all'),
    t('blogsFavoriteScreen.blogTopic.generalTopics'),
    t('blogsFavoriteScreen.blogTopic.depression'),
    t('blogsFavoriteScreen.blogTopic.parenting'),
    t('blogsFavoriteScreen.blogTopic.other'),
  ];
  const [activeBlogTopic, setActiveBlogTopic] = useState(blogTopic[0]);

  const [blog, setBlog] = useState([
    {
      title: t('blogsFavoriteScreen.blog.title1'),
      image: require('../../assets/images/blog1.png'),
    },
    {
      title: t('blogsFavoriteScreen.blog.title2'),
      image: require('../../assets/images/blog2.png'),
    },
    {
      title: t('blogsFavoriteScreen.blog.title3'),
      image: require('../../assets/images/blog5.png'),
    },
    {
      title: t('blogsFavoriteScreen.blog.title4'),
      image: require('../../assets/images/blog3.png'),
    },
    {
      title: t('blogsFavoriteScreen.blog.title5'),
      image: require('../../assets/images/blog4.png'),
    },
    {
      title: t('blogsFavoriteScreen.blog.title6'),
      image: require('../../assets/images/blog6.png'),
    },
  ]);

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
          <Text style={styles.title}>{t('blogsFavoriteScreen.title')}</Text>
        </View>

        <View style={styles.recentBlogsContainer}>
          <FlatList
            data={blog}
            renderItem={({ item, index }) => (
              <View style={styles.blogTile}>
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
                <Text style={styles.blogText}>{item.title}</Text>
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

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  blogTile: {
    flex: 1,
    width: '50%',
    height: 230,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '12%',
    marginVertical: 8,
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
    fontSize: 13,
    paddingBottom: 10,
  },

  recentBlogsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  recentBlogsTitle: {
    fontSize: 18,
    fontWeight: '500',
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
});

export default BlogsFavoriteScreen;

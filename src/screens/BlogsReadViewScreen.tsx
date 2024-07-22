import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,I18nManager } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';

const BlogsReadViewScreen = () => {
  const navigation = useNavigation();

  const isRTL = I18nManager.isRTL;
  const textAlignStyle =  isRTL ? 'right': 'left';
  const alignItemStyle =  isRTL ? 'flex-start': null;

  const transformStyle = isRTL ? [{ rotate: '180deg' }]   : [{ rotate: '0deg' }];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/images/back.png')}
              style={[styles.backIcon , {transform:transformStyle}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.title}>{t('blogsReadViewScreen.title')}</Text>
        </View>

        <View style={styles.content}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.blogTitle}>
              {t('blogsReadViewScreen.blogTitle')}
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/favorite.png')}
                style={styles.favoriteImage}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../assets/images/blog3.png')}
            style={styles.blogImage}
          />
          <View style={{alignItems:alignItemStyle,}}>
          <Text style={styles.blogText}>
            {t('blogsReadViewScreen.blogText1')}
          </Text>
          <Text style={styles.blogText}>
            {t('blogsReadViewScreen.blogText2')}
          </Text>
          <Text style={styles.blogText}>
            {t('blogsReadViewScreen.blogText3')}
          </Text>
          <Text style={styles.blogText}>
            {t('blogsReadViewScreen.blogText4')}
          </Text>
          <Text style={styles.blogText}>
            {t('blogsReadViewScreen.blogText5')}
          </Text>
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={[styles.categoriesTitle, 
            {alignSelf:alignItemStyle}
            ]}>
            {t('blogsReadViewScreen.categoriesTitle')}
          </Text>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              {t('blogsReadViewScreen.category.generalTopics')}
            </Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={[styles.categoryIcon, {transform:transformStyle}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              {t('blogsReadViewScreen.category.depression')}
            </Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={[styles.categoryIcon, {transform:transformStyle}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              {t('blogsReadViewScreen.category.parentingAndFamily')}
            </Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={[styles.categoryIcon, {transform:transformStyle}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              {t('blogsReadViewScreen.category.addiction')}
            </Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={[styles.categoryIcon, {transform:transformStyle}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              {t('blogsReadViewScreen.category.childrenAndTeenagers')}
            </Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={[styles.categoryIcon, {transform:transformStyle}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  batteryIcon: {
    width: 24,
    height: 24,
  },
  content: {
    padding: 16,
  },
  blogTitle: {
    // borderWidth:1,
    fontSize: 18,
    fontWeight: '500',
    marginRight: 16,
    width: '60%',
    color: '#232323',
    // marginBottom: 16,
  },
  blogImage: {
    width: '100%',
    height: 140,
    marginBottom: 16,
    borderRadius: 8,
  },
  favoriteImage: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
  blogText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#333333',
    // borderWidth:1,
    // textAlign:'center'
  },
  categoriesContainer: {
    // marginTop: 10,
    paddingHorizontal: 16,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1C2024',
    // alignItems:'center',
    // borderWidth:1
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    marginVertical: 6,
    paddingHorizontal: 16,
    paddingVertical: 22,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 15,
    color: '#52525B',
  },
  categoryIcon: {
    width: 15,
    height: 16,
    tintColor: 'gray',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerButtonText: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default BlogsReadViewScreen;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const BlogsReadViewScreen = ({ route }) => {
//   const navigation = useNavigation();
//   const [blogData, setBlogData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const { blogId } = route.params;

// //   useEffect(() => {
// //     const fetchBlogData = async () => {
// //       try {
// //         // Replace with your actual API call to fetch blog data
// //         const response = await fetch(`https://api.example.com/blogs/${blogId}`);
// //         const data = await response.json();
// //         setBlogData(data);
// //       } catch (error) {
// //         console.error('Error fetching blog data:', error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchBlogData();
// //   }, [blogId]);

//   if (isLoading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!blogData) {
//     return (
//       <View style={styles.container}>
//         <Text>Blog not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{blogData.title}</Text>
//       {blogData.imageUrl && (
//         <Image
//           style={styles.image}
//           source={{ uri: blogData.imageUrl }}
//         />
//       )}
//       <Text style={styles.content}>{blogData.content}</Text>
//       <View style={styles.categoriesContainer}>
//         <Text style={styles.categoriesText}>Categories:</Text>
//         <FlatList
//           data={blogData.categories}
//           horizontal
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={styles.category}
//               onPress={() => navigation.navigate('BlogCategory', { categoryId: item.id })}
//             >
//               <Text style={styles.categoryText}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   categoriesContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   categoriesText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   category: {
//     backgroundColor: '#eee',
//     padding: 10,
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   categoryText: {
//     color: '#333',
//   },
// });

// export default BlogsReadViewScreen;

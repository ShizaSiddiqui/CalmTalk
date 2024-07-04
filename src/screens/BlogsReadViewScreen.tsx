import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const BlogsReadViewScreen = () => {
  const navigation = useNavigation();
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
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Blogs</Text>
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
              Making Peace With the Fear of Being Forgotten
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
          <Text style={styles.blogText}>
            In the quiet moments of introspection, when the noise of the world
            fades away, there's a whisper that often tugs at the corners of our
            minds: the fear of being forgotten. It's a primal fear, rooted in
            our innate desire for significance and connection. We strive to
            leave our mark on the world, to be remembered long after we're gone.
            But what happens when that fear becomes a shadow, looming over our
            every action and decision?
          </Text>
          <Text style={styles.blogText}>
            For many, the fear of being forgotten manifests in subtle ways,
            shaping the choices we make and the paths we take in life. We seek
            validation and recognition, grasping for fleeting moments of
            acknowledgment to appease the gnawing sense of insignificance. Yet,
            no matter how much praise we receive or how many accomplishments we
            stack up, the fear remains, lurking in the corners of our
            consciousness.
          </Text>
          <Text style={styles.blogText}>
            But what if we shifted our perspective? What if instead of fearing
            oblivion, we embraced the transient nature of existence? What if we
            found solace in the ebb and flow of life, knowing that our impact
            doesn't have to be grand or enduring to be meaningful? Perhaps, in
            embracing our impermanence, we can find freedom from the shackles of
            validation-seeking and the relentless pursuit of legacy.
          </Text>
          <Text style={styles.blogText}>
            Making peace with the fear of being forgotten isn't about resigning
            ourselves to obscurity; it's about finding peace within ourselves,
            independent of external validation. It's about recognizing that our
            worth isn't measured by the number of people who remember our name,
            but by the depth of the connections we forge and the lives we touch,
            however fleetingly.
          </Text>
          <Text style={styles.blogText}>
            In the end, perhaps the true measure of a life well-lived isn't in
            the echoes that reverberate through history, but in the quiet
            moments of connection, the shared laughter, the tears wiped away,
            and the love exchanged. So let us release the fear of being
            forgotten and instead embrace the beauty of the present moment,
            knowing that our presence, however transient, leaves an indelible
            mark on the tapestry of humanity.
          </Text>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>General Topics</Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Depression</Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>
              Parenting & Family Relationship
            </Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Addiction</Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Children & Teenagers</Text>
            <Image
              source={require('../../assets/images/forward.png')}
              style={styles.categoryIcon}
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

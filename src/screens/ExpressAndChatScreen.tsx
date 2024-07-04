import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

const initialLayout = { width: Dimensions.get('window').width };
const otherPosts = [
  {
    id: '1',
    name: 'Mohammad Ahmed',
    date: 'May 19, 8:15 AM',
    text: 'Lorem ipsum dolor sit amet consectetur. Egestas eros sagittis mauris et. Maecenas urna varius a sollicitudin tincidunt malesuada scelerisque. Lacus proin amet diam sodales pretium fames nunc.',
    liked: false,
  },
  {
    id: '2',
    name: 'Dr. Shafaq',
    date: 'May 19, 8:15 AM',
    text: 'Lorem ipsum dolor sit amet consectetur. Egestas eros sagittis mauris et. Maecenas urna varius a sollicitudin tincidunt malesuada scelerisque. Lacus proin amet diam sodales pretium fames nunc.',
    liked: false,
  },
  {
    id: '3',
    name: 'Ayeza Khan',
    date: 'May 19, 8:15 AM',
    text: 'Lorem ipsum dolor sit amet consectetur. Egestas eros sagittis mauris et. Maecenas urna varius a sollicitudin tincidunt malesuada scelerisque. Lacus proin amet diam sodales pretium fames nunc.',
    liked: false,
  },
];

const myPosts = [
  {
    id: '1',
    name: 'Mohammad Ahmed',
    date: 'May 19, 8:15 AM',
    text: 'Lorem ipsum dolor sit amet consectetur. Egestas eros sagittis mauris et. Maecenas urna varius a sollicitudin tincidunt malesuada scelerisque. Lacus proin amet diam sodales pretium fames nunc.',
    liked: false,
  },
  {
    id: '2',
    name: 'Dr. Shafaq',
    date: 'May 19, 8:15 AM',
    text: 'Lorem ipsum dolor sit amet consectetur. Egestas eros sagittis mauris et. Maecenas urna varius a sollicitudin tincidunt malesuada scelerisque. Lacus proin amet diam sodales pretium fames nunc.',
    liked: false,
  },
];

const ExpressAndChatScreen = () => {
  const [likeStatus, setLikeStatus] = useState(otherPosts);
  const [myPostStatus, setMyPostStatus] = useState(myPosts);
  const [trendingTab, setTrendingTab] = useState('#MentalHealthDay');
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'others', title: "Other's posts" },
    { key: 'myposts', title: 'My posts' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const navigation = useNavigation();

  const toggleLike = (id: string, isOtherPosts: boolean) => {
    if (isOtherPosts) {
      setLikeStatus(
        likeStatus.map((post) =>
          post.id === id ? { ...post, liked: !post.liked } : post,
        ),
      );
    } else {
      setMyPostStatus(
        myPostStatus.map((post) =>
          post.id === id ? { ...post, liked: !post.liked } : post,
        ),
      );
    }
  };

  const renderItem = ({ item }: any, isOtherPosts: boolean) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={require('../../assets/images/profile_user.png')}
          style={styles.profileImage}
        />
        <View style={styles.postInfo}>
          <Text style={styles.postName}>{item.name}</Text>
          <Text style={styles.postDate}>{item.date}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/dots.png')}
            style={styles.dotsImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.postText}>{item.text}</Text>
      <View style={styles.postActions}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => toggleLike(item.id, isOtherPosts)}
          >
            <Image
              source={
                item.liked
                  ? require('../../assets/images/favorite.png')
                  : require('../../assets/images/heart_outline.png')
              }
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text>21</Text>

          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <Image
              source={require('../../assets/images/comment.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text>3</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/save.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const OthersPostsRoute = () => (
    <FlatList
      data={likeStatus}
      renderItem={({ item }) => renderItem({ item }, true)}
      keyExtractor={(item) => item.id}
      style={styles.postsList}
    />
  );

  const MyPostsRoute = () => (
    <FlatList
      data={myPostStatus}
      renderItem={({ item }) => renderItem({ item }, false)}
      keyExtractor={(item) => item.id}
      style={styles.postsList}
    />
  );

  const renderScene = SceneMap({
    others: OthersPostsRoute,
    myposts: MyPostsRoute,
  });

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
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.title}>Express and Chat</Text>
        </View>
        <Text style={styles.trendingNow}>Trending Now</Text>
        <View style={styles.trendingTabs}>
          <TouchableOpacity
            style={
              trendingTab === '#MentalHealthDay'
                ? styles.activeTab
                : styles.inactiveTab
            }
            onPress={() => setTrendingTab('#MentalHealthDay')}
          >
            <Text
              style={
                trendingTab === '#MentalHealthDay'
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              #MentalHealthDay
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              trendingTab === '#CalmTalk'
                ? styles.activeTab
                : styles.inactiveTab
            }
            onPress={() => setTrendingTab('#CalmTalk')}
          >
            <Text
              style={
                trendingTab === '#CalmTalk'
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              #CalmTalk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              trendingTab === '#Therapy' ? styles.activeTab : styles.inactiveTab
            }
            onPress={() => setTrendingTab('#Therapy')}
          >
            <Text
              style={
                trendingTab === '#Therapy'
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              #Therapy
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: '230%' }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#B1C181' }}
                style={{ backgroundColor: 'white' }}
                labelStyle={{ color: '#B1C181', fontWeight: 'bold' }}
                inactiveColor="black"
              />
            )}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require('../../assets/images/add.png')}
          style={styles.addIcon}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Express and chat"
              placeholderTextColor={'#424242B2'}
              multiline={true}
              maxLength={400}
              value={newPostText}
              onChangeText={setNewPostText}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 10, top: 10 }}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={require('../../assets/images/modal_close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>

            <View style={styles.modalActions}>
              <Text style={styles.expressBottomText}>
                Max 400 characters allowed
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setNewPostText('');
                  }}
                >
                  <Image
                    source={require('../../assets/images/mic.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    setNewPostText('');
                  }}
                >
                  <Image
                    source={require('../../assets/images/close.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle add post logic here */ setModalVisible(false);
                    setNewPostText('');
                  }}
                >
                  <Image
                    source={require('../../assets/images/check.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add styles for the modal and its content
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  expressBottomText: {
    fontSize: 14,
    color: '#42424299',
    marginVertical: 10,
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  input: {
    height: 100,

    borderRadius: 5,
    // padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
    fontSize: 24,
    fontWeight: '400',
  },
  trendingNow: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  trendingTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  inactiveTab: {
    // backgroundColor: '#9DB8A1',
    borderWidth: 1,
    borderColor: '#09090B33',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  activeTab: {
    backgroundColor: '#9DB8A1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: '#333',
  },
  postsList: {
    paddingHorizontal: 20,
  },
  postContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    // paddingHorizontal: 5,
    paddingVertical: 15,
    marginBottom: 20,
    elevation: 1,
    width: '100%',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postInfo: {
    flex: 1,
  },
  postName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postDate: {
    fontSize: 12,
    color: '#888',
  },
  dotsImage: {
    width: 24,
    height: 24,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#B1C181',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
});

export default ExpressAndChatScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  I18nManager,
  TextInput,
  Platform,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import { useTranslation } from 'react-i18next';

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
  {
    id: '4',
    name: 'Dr. Shafaq',
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
const trendingTabs = [
  { id: '1', name: '#MentalHealthDay' },
  { id: '2', name: '#CalmTalk' },
  { id: '3', name: '#Therapy' },
  { id: '4', name: '#Mindfulness' },
  { id: '5', name: '#SelfCare' },
  { id: '6', name: '#Wellness' },
  { id: '7', name: '#Motivation' },
  { id: '8', name: '#Inspiration' },
];

const ExpressAndChatScreen = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [likeStatus, setLikeStatus] = useState(otherPosts);
  const [myPostStatus, setMyPostStatus] = useState(myPosts);
  const [trendingTab, setTrendingTab] = useState('#MentalHealthDay');
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'others', title: t('expressAndChatScreen.othersPosts') },
    { key: 'myposts', title: t('expressAndChatScreen.myPosts') },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const navigation = useNavigation();

  const textAlignStyle = isRTL ? 'left' : null;
  const transformStyle = isRTL ? [{ rotate: '180deg' }] : [{ rotate: '0deg' }];
  const alignSelfStyle = isRTL ? 'flex-start' : null;

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
    <View
      style={{
        width: '100%',
        borderBottomWidth: Platform.OS === 'ios' ? 0.3 : 0.5,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          // marginTop: 10,
          backgroundColor: 'white',
          width: Platform.OS === 'ios' ? '86%' : '78%',
          paddingLeft: 15,
        }}
      >
        <Image
          source={require('../../assets/images/profile_user.png')}
          style={styles.profileImage}
        />
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <View style={[styles.postInfo, { alignItems: alignSelfStyle }]}>
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
          <Text style={[styles.postText, { textAlign: textAlignStyle }]}>
            {t('depressionByPHQ.aboutAssessmentText')}
          </Text>
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
              <Text style={styles.numberOfEngagement}>21</Text>

              <TouchableOpacity style={{ marginHorizontal: 10 }}>
                <Image
                  source={require('../../assets/images/comment.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.numberOfEngagement}>3</Text>
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
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={[styles.title]}>{t('expressAndChatScreen.title')}</Text>
        </View>
        <Text style={[styles.trendingNow, , { alignSelf: alignSelfStyle }]}>
          {t('expressAndChatScreen.trendingNow')}
        </Text>
        <View style={styles.trendingTabs}>
          <FlatList
            data={trendingTabs}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={
                  trendingTab === item.name
                    ? styles.activeTab
                    : styles.inactiveTab
                }
                onPress={() => setTrendingTab(item.name)}
              >
                <Text
                  style={
                    trendingTab === item.name
                      ? styles.activeTabText
                      : styles.inactiveTabText
                  }
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ height: '300%' }}>
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
          <View style={[styles.modalContent]}>
            <TextInput
              style={[styles.input, { textAlign: isRTL ? 'right' : 'left' }]}
              placeholder={t('expressAndChatScreen.expressAndChat')}
              placeholderTextColor={'#424242B2'}
              multiline={true}
              maxLength={400}
              value={newPostText}
              onChangeText={setNewPostText}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 8, top: 3 }}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={require('../../assets/images/modal_close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>

            <View style={styles.modalActions}>
              <Text style={styles.expressBottomText}>
                {t('expressAndChatScreen.maxCharacters')}
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
                    style={[styles.actionIcon, { tintColor: '#B1C181' }]}
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
                    style={[styles.actionIcon, { tintColor: '#B1C181' }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle add post logic here */ setModalVisible(false);
                    setNewPostText('');
                  }}
                >
                  <Image
                    source={require('../../assets/images/check_B1C181.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    marginBottom: 20,
    textAlignVertical: 'top',
    paddingTop: 10,
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
    marginTop: 40,
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
    marginLeft: 10,
  },
  inactiveTab: {
    // backgroundColor: '#9DB8A1',
    borderWidth: 1,
    borderColor: '#09090B33',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 3,
  },

  activeTab: {
    backgroundColor: '#9DB8A1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 3,
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: '#333',
  },
  postsList: { backgroundColor: 'white' },
  postContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    // borderRadius: 10,
    paddingVertical: 15,
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
    margin: 10,
  },
  postInfo: {
    flex: 1,
  },
  postName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#223322',
  },
  postDate: {
    fontSize: 12,
    color: '#23232380',
  },
  dotsImage: {
    width: 20,
    height: 20,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
    color: '#232323',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberOfEngagement: {
    color: '#232323',
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

import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CalmMusic from '../components/CalmMusic';
import TherapyCoursesTile from '../components/TherapyCoursesTile';
import LinearGradient from 'react-native-linear-gradient';

const data = {
  blog: [
    {
      title: 'Travel and Its Impact on Mental Health',
      image: require('../../assets/images/blog1.png'),
    },
    {
      title: 'Are you struggling to find time to rest during the...',
      image: require('../../assets/images/blog2.png'),
    },
    {
      title: 'Making peace with the fear of being forgotten',
      image: require('../../assets/images/blog3.png'),
    },
    {
      title: 'Distinguishing between psychological frustration a....',
      image: require('../../assets/images/blog4.png'),
    },
    {
      title: 'Feeling Mental Fatigue | Learn about its Symptoms,...',
      image: require('../../assets/images/blog5.png'),
    },
    {
      title: 'What to Expect When Meeting Your Therapist Online',
      image: require('../../assets/images/blog6.png'),
    },
    // Add more blog data here
  ],
  calmMusic: [
    {
      title: 'Love kind meditation',
      duration: '16:45',
      image: require('../../assets/images/play.png'),
    },
    // Add more calm music data here
  ],
  therapyCourses: [
    {
      title: 'First Session',
      subText: 'Your therapist will build emotional...',
      image: require('../../assets/images/therapy_courses_render_item_bg.png'),
    },
    {
      title: 'First Session',
      subText: 'Your therapist will build emotional...',
      image: require('../../assets/images/therapy_courses_render_item_bg.png'),
    },
    // Add more therapy courses data here
  ],
  onlineAssessment: [
    {
      id: 1,
      title: 'Depression Test',
      image: require('../../assets/images/assessment1.png'),
    },
    {
      id: 2,
      title: 'Anxiety Test',
      image: require('../../assets/images/assessment2.png'),
    },
    {
      id: 3,
      title: 'Anger Test',
      image: require('../../assets/images/assessment3.png'),
    },
    // Add more online assessment data here
  ],
  therapists: [
    {
      name: 'Dr Jelena Lubenko',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor2.png'),
    },
    {
      name: 'Joao Laurence',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor3.png'),
    },
    {
      name: 'Joao Laurence',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor4.png'),
    },
    {
      name: 'Joao Laurence',
      tags: 'Psychologist',
      subTags: 'Depression, Anxiety, ADHD, OCD',
      years: '2 years',
      location: 'India',
      languages: 'English, Arabic',
      image: require('../../assets/images/doctor5.png'),
    },
    // Add more therapist data here
  ],
};

const DiscoverScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Image
            source={require('../../assets/images/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <>
          <Text style={styles.headerTitle}>Discover</Text>
          <Image
            source={require('../../assets/images/discover.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Discover"
          placeholderTextColor={'#D9D9D9'}
        />
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.tilesContainer}>
        {[
          {
            label: 'Blog',
            image: require('../../assets/images/blog_icon.png'),
          },
          {
            label: 'Listen to Calm Music',
            image: require('../../assets/images/music_icon.png'),
          },
          {
            label: 'Therapy Courses',
            image: require('../../assets/images/courses_icon.png'),
          },
          {
            label: 'Daily Tips',
            image: require('../../assets/images/tips_icon.png'),
          },
          {
            label: 'On Boarding',
            image: require('../../assets/images/onboarding_icon.png'),
          },
          {
            label: 'Online assessment',
            image: require('../../assets/images/assessment_icon.png'),
          },
          {
            label: 'Products',
            image: require('../../assets/images/products_icon.png'),
          },
          {
            label: 'Exercises',
            image: require('../../assets/images/exercises_icon.png'),
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tile}
            onPress={() => {
              if (item.label === 'Products') {
                navigation.navigate('ProductCategoriesScreen');
              }
            }}
          >
            <Image source={item.image} style={styles.tileImage} />
            <Text style={styles.tileText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ImageBackground
        source={require('../../assets/images/background_express_and_chat.png')}
        style={styles.expressContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            paddingTop: 20,
          }}
        >
          <Text style={styles.expressTitle}>Express and Chat</Text>
          <Text style={styles.expressLink}>{`Check what is going on >`}</Text>
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            placeholder="Express your feelings"
            placeholderTextColor={'#9D9D9D'}
            multiline
            numberOfLines={4}
            maxLength={400}
          />
          <View style={styles.textAreaIcons}>
            <Image
              source={require('../../assets/images/mic.png')}
              style={styles.icon}
            />
            <Image
              source={require('../../assets/images/close.png')}
              style={styles.icon}
            />
            <Image
              source={require('../../assets/images/check.png')}
              style={styles.icon}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.expressBottomText}>
            Max 400 characters allowed
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('ExpressAndChatScreen')}
          >
            <Text style={{ color: 'white', fontSize: 14 }}>My Posts</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Blogs</Text>
        <TouchableOpacity onPress={() => navigation.navigate('BlogsScreen')}>
          <Text style={styles.sectionLink}>{`Show All`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.blog}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.blogTile,
              {
                marginTop: index % 2 === 1 ? 30 : 0, // Apply marginTop to second column only
              },
            ]}
          >
            <Image source={item.image} style={styles.blogImage} />
            <Text style={styles.blogText}>{item.title}</Text>
            <TouchableOpacity
              style={styles.blogLinkTouch}
              onPress={() => navigation.navigate('BlogsReadViewScreen')}
            >
              <Image
                source={require('../../assets/images/blog_link.png')}
                style={styles.iconBlogLink}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `blog-${index}`}
      />

      <CalmMusic navigation={navigation} />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Therapy Courses</Text>
        <Text style={styles.sectionLink}>{`Show All`}</Text>
      </View>
      <FlatList
        data={data.therapyCourses}
        horizontal
        renderItem={({ item }) => (
          <TherapyCoursesTile
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

      <View style={styles.sectionHeaderAssessment}>
        <Text style={styles.sectionTitle}>Online Assessment</Text>
        <TouchableOpacity>
          <Text
            style={styles.sectionLink}
            onPress={() => navigation.navigate('AssesmentsScreen')}
          >{`Show All`}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.onlineAssessment}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.assessmentTile}
            onPress={() => {
              let title;
              if (item.id === 1) {
                title = 'Depression By PHQ-9';
              } else if (item.id === 2) {
                title = 'Anxiety test';
              } else if (item.id === 3) {
                title = 'Anger Test';
              }
              navigation.navigate('DepressionByPHQScreen', { title });
            }}
          >
            <ImageBackground
              source={item.image}
              style={styles.assessmentImage}
              resizeMode="contain"
            ></ImageBackground>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `assessment-${index}`}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Your Therapist Is Just A Click Away
        </Text>
      </View>
      <FlatList
        data={data.therapists}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.therapistTile}>
            <View
              style={[
                styles.headerTag,
                { borderTopRightRadius: 20, borderBottomLeftRadius: 20 },
              ]}
            >
              <Text style={{ color: 'white' }}>Individual, Couple</Text>
            </View>
            <Image source={item.image} style={styles.therapistImage} />
            <View style={styles.therapistInfo}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Text style={styles.therapistName}>{item.name}</Text>
                <View
                  style={{
                    backgroundColor: '#EBF5F5',
                    padding: 8,
                    borderRadius: 15,
                  }}
                >
                  <Text style={styles.therapistTags}>{item.tags}</Text>
                </View>
              </View>
              <Text style={styles.therapistSubTags}>{item.subTags}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}
              >
                <Text
                  style={styles.therapistDetails}
                >{`${item.years} | ${item.location} | ${item.languages}`}</Text>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => navigation.navigate('TherapistFormScreen')}
                >
                  <Text style={styles.bookButtonText}>BOOK WITH ME!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => `therapist-${index}`}
      />

      <Image
        source={require('../../assets/images/faqs.png')}
        style={styles.faqImage}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: '20%',
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },

  backIcon: {
    width: 10,
    height: 15,
    marginHorizontal: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginVertical: 13,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#B1C18199',
  },
  searchInput: {
    flex: 1,
    padding: 5,
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    // borderWidth:1,
    marginHorizontal: 10,
  },
  tile: {
    // width: 'auto%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 22,
    opacity: 0.7,
    // marginHorizontal:7,
    marginVertical: 7,
    alignItems: 'center',
    // alignItems: 'center',
    // marginBottom: 10,
  },
  tileImage: {
    width: 18,
    height: 18,
    marginHorizontal: 8,
    // marginBottom: 5
  },
  tileText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#52525B',

    // color:'gray'
  },
  expressContainer: {
    height: 300,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  expressTitle: {
    fontSize: 20,
  },
  expressLink: {
    fontSize: 14,
    color: '#52525B',
  },
  expressBottomText: {
    fontSize: 14,
    color: '#424242CC',
    marginVertical: 10,
  },
  textAreaContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginBottom: 10,
  },
  textAreaIcons: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    margin: 10,
    width: 80,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 6,
    bottom: 0,
  },
  textArea: {
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionHeaderAssessment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 20,
    marginVertical: 15,
    // fontWeight: '600',
  },
  sectionLink: {
    fontSize: 14,
    color: '#52525B',
  },
  blogTile: {
    flex: 1,
    width: '50%',
    height: 190,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '12%',
    paddingVertical: '5%',
  },
  blogImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginTop: '1%',
  },
  iconBlogLink: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
  blogLinkTouch: {
    position: 'absolute',
    bottom: 5,
    right: 2,
  },
  blogText: {
    fontWeight: '600',
    fontSize: 13,
    paddingBottom: 10,
    // textAlign: 'center'
  },

  musicTile: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  musicImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  musicText: {
    textAlign: 'center',
    marginBottom: 5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#B1C181',
    borderRadius: 2.5,
    marginRight: 10,
  },
  duration: {
    fontSize: 12,
  },
  courseTile: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  courseImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  courseTitle: {
    textAlign: 'center',
    marginBottom: 5,
  },
  courseSubText: {
    textAlign: 'center',
  },
  assessmentTile: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    // marginRight: 10,
    // borderWidth: 1,
  },
  assessmentImage: {
    width: 140,
    height: 150,
    borderRadius: 10,
    // marginBottom: 5,
  },
  therapistTile: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 4,
  },
  therapistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    alignSelf: 'center',
  },
  therapistInfo: {
    flex: 1,
    marginTop: '7%',
  },
  therapistName: {
    fontSize: 18,
    fontWeight: '600',
  },
  therapistTags: {
    fontSize: 12,
    color: '#638568',
  },
  headerTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  therapistSubTags: {
    fontSize: 12,
    color: '#5C5C5C',
    marginBottom: 5,
  },
  therapistDetails: {
    fontSize: 10,
    color: '#5C5C5C',
    borderWidth: 1.2,
    borderColor: '#E8E8F1',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 3,
  },
  bookButton: {
    backgroundColor: '#B1C181',
    padding: 5,
    borderRadius: 7,
    paddingVertical: 8,
  },
  bookButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
  faqImage: {
    width: '100%',
    height: 700,
  },
});

export default DiscoverScreen;

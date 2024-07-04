import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const TherapistSpeaksScreen = () => {
  const data = [
    {
      image: require('../../assets/images/blog4.png'),
      title: 'What Is Cognitive Behavioral Therapy (CBT)',
    },
    {
      image: require('../../assets/images/blog4.png'),
      title:
        'Can You Explain Who A Neuropsychologist Is & What Their Role Entails?',
    },
    {
      image: require('../../assets/images/blog4.png'),
      title:
        'Can You Explain Your Approach To Acceptance And Commitment Therapy?',
    },
  ];
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
              style={styles.backArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Therapist Speaks</Text>
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
        <View style={styles.textContainer}>
          <Text style={styles.title}>What Social Anxiety Disorder</Text>
          <Text style={styles.text}>
            Social Anxiety Disorder, Or Social Phobia, Is Characterized By An
            Intense Fear Of Social Situations And Being Judged By Others. This
            Condition Can Lead To Avoidance Of Daily Activities And Significant
            Distress. Symptoms Include Excessive Anxiety, Rapid Heartbeat, And
            Sweating In Social Contexts. With Treatment Like
            Cognitive-Behavioral Therapy And Medication, Individuals Can Manage
            Symptoms And Improve Their Quality Of Life.
          </Text>
        </View>
        <Text style={styles.otherPostsText}>Check other posts</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                marginVertical: 10,
                borderRadius: 10,
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
                    <Text style={styles.generalTopicText}>General Topic</Text>
                  </View>
                </View>
                <Text style={styles.otherPostText}>{item.title}</Text>
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
    height: 180,
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
    // color: '#FFFFFF',
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
    // marginBottom: 10,
  },

  otherPost: {
    width: '50%',
    // marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:1
  },
  otherPostImageContainer: {
    // marginBottom: 10,
    alignItems: 'center',
  },
  otherPostImage: {
    width: 150,
    height: 120,
    padding: 10,
    borderRadius: 10,
    // resizeMode: 'cover',
    // borderWidth:1,
  },
  otherPostText: {
    fontSize: 14,
    lineHeight: 20,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});

export default TherapistSpeaksScreen;

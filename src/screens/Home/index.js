import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';
import {ListCoursesHorizontal} from '../../components/ListCourses';
import {BookmarksHorizontal} from '../../components/ListBookmarks';
import {ListPathsHorizontal} from '../../components/ListPaths';
import {ListChannelsHorizontal} from '../../components/ListChannels';

const WelcomeImage = () => (
  <ImageBackground
    style={styles.image}
    source={require('../../../assets/images/welcome.jpg')}>
    <Text style={styles.text}>Welcome to DoubleSeven</Text>
  </ImageBackground>
);

const Home = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <WelcomeImage />
        <ListCoursesHorizontal title="Software development" />
        <ListCoursesHorizontal title="IT operation" />
        <ListCoursesHorizontal title="Data professional" />
        <ListCoursesHorizontal title="Security professional" />
        <BookmarksHorizontal />
        <ListPathsHorizontal />
        <ListChannelsHorizontal />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

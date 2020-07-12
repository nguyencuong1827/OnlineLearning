import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';
import {ListCoursesHorizontal} from '../../components/ListCourses';
import {EmptyBookmark} from '../../components/ListBookmarks';
import {EmptyPath} from '../../components/ListPaths';
import {EmptyChannel} from '../../components/ListChannels';

const WelcomeImage = () => (
  <ImageBackground
    style={styles.image}
    source={require('../../../assets/images/welcome.jpg')}>
    <Text style={styles.text}>Welcome to DoubleSeven</Text>
  </ImageBackground>
);

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <WelcomeImage />
        <ListCoursesHorizontal title="Software development" />
        <ListCoursesHorizontal title="IT operation" />
        <ListCoursesHorizontal title="Data professional" />
        <ListCoursesHorizontal title="Security professional" />
        <EmptyBookmark />
        <EmptyPath />
        <EmptyChannel />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

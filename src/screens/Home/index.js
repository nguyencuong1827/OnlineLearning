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
        <ListCoursesHorizontal
          title="Software development"
          navigation={props.navigation}
        />
        <ListCoursesHorizontal
          title="IT operation"
          navigation={props.navigation}
        />
        <ListCoursesHorizontal
          title="Data professional"
          navigation={props.navigation}
        />
        <ListCoursesHorizontal
          title="Security professional"
          navigation={props.navigation}
        />
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

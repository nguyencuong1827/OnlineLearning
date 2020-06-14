import React from 'react';
import {ScrollView, StyleSheet, ImageBackground, Text} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';

import MyPaths from './MyPaths/my-paths';
import MyChannels from './MyChannels/my-channels';
import Bookmarks from './Bookmarks/bookmarks';

const WelcomeImage = () => (
  <ImageBackground
    style={styles.image}
    source={{
      uri:
        'https://cdn4.vectorstock.com/i/1000x1000/24/13/brick-wall-room-background-neon-light-vector-27852413.jpg',
    }}>
    <Text style={styles.text}>Welcome to DoubleSeven</Text>
  </ImageBackground>
);

const Home = (props) => {
  return (
    <ScrollView>
      <WelcomeImage />
      <SectionCourses title="Software development" />
      <SectionCourses title="IT operation" />
      <SectionCourses title="Data professional" />
      <SectionCourses title="Security professional" />
      <MyPaths />
      <MyChannels />
      <Bookmarks />
    </ScrollView>
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
    color: 'white',
    textAlign: 'center',
  },
});

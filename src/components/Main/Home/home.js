import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';

const Home = (props) => {
  const onPressNewReleased = () => {
    console.log('Pressed on new released');
  };
  return (
    <ScrollView>
      <ImageButton title="NEW RELEASE" onPress={onPressNewReleased} />
      <SectionCourses title="Continue learning" />
      <SectionCourses title="Path" />
      <SectionCourses title="Channel" />
      <SectionCourses title="Bookmarks" />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

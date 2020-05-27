import React from "react";
import { ScrollView,StyleSheet } from "react-native";
import SectionCourses from "./SectionCourses/section-courses";
import ImageButton from "../../Common/image-button";

const Home = () => {
  return (
    <ScrollView>
      <ImageButton title='NEW\nRELEASE'/>
      <SectionCourses title="Continue learning" />
      <SectionCourses title="Path" />
      <SectionCourses title="Channel" />
      <SectionCourses title="Bookmarks" />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});

import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import SectionCoursesItem from "../SectionsCoursesItem/section-coueses-item";

const SectionCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: "React Native",
      author: "Hai Pham",
      level: "Advance",
      released: "May 6, 2020",
      duration: "30 hours",
    },
    {
      id: 2,
      title: "Swift",
      author: "Hai Pham",
      level: "Advance",
      released: "June 6, 2019",
      duration: "40 hours",
    },
    {
        id: 3,
        title: "Android",
        author: "Nguyen Cuong",
        level: "Advance",
        released: "June 5, 2019",
        duration: "40 hours",
      },
  ];

  const renderListItems = (courses) => {
      return courses.map((item) => <SectionCoursesItem item={item} key={item.id}/>)
  }

  return (
    <View>
      <View>
        <Text>{props.title}</Text>
      </View>
      <ScrollView horizontal={true}>
          {renderListItems(courses)}
      </ScrollView>
    </View>
  );
};
export default SectionCourses;
const styles = StyleSheet.create({});

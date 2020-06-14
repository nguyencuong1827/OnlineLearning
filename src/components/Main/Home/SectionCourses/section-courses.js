import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import SectionCoursesItem from '../SectionsCoursesItem/section-coueses-item';

const SeeAllButton = (props) => {
  return (
    <TouchableOpacity style={styles.seeAllButton}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.seeAll}>See all {'>'}</Text>
    </TouchableOpacity>
  );
};
const SectionCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: 'React Native',
      author: 'Hai Pham',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: '30 hours',
      averageRating: 4.4,
      totalRating: 200,
    },
    {
      id: 2,
      title: 'Swift',
      author: 'Hai Pham',
      level: 'Advance',
      released: 'June 6, 2019',
      duration: '40 hours',
      averageRating: 4.2,
      totalRating: 227,
    },
    {
      id: 3,
      title: 'Android',
      author: 'Nguyen Cuong',
      level: 'Advance',
      released: 'June 5, 2019',
      duration: '40 hours',
      averageRating: 4.8,
      totalRating: 600,
    },
  ];

  const renderListItems = (courses) => {
    return courses.map((item) => (
      <SectionCoursesItem item={item} key={item.id} />
    ));
  };
  return (
    <View style={styles.container}>
      <SeeAllButton title={props.title} />
      <ScrollView horizontal={true}>{renderListItems(courses)}</ScrollView>
    </View>
  );
};
export default SectionCourses;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
  },
  seeAllButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  seeAll: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 11,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#d1c4e9',
    paddingHorizontal: 10,
  },
});

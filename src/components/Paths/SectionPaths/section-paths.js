import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import SectionPathsItem from '../SectionPathsItem/section-paths-item';

const SeeAllButton = (props) => {
  return (
    <TouchableOpacity style={styles.seeAllButton}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.seeAll}>See all {'>'}</Text>
    </TouchableOpacity>
  );
};
const SectionPaths = (props) => {
  const paths = [
    {
      id: 1,
      title: 'React Native',
      numberCourses: 12,
    },
    {
      id: 2,
      title: 'Swift',
      numberCourses: 42,
    },
    {
      id: 3,
      title: 'Android',
      numberCourses: 24,
    },
  ];

  const renderListItems = () => {
    return paths.map((item) => (
      <SectionPathsItem
        item={item}
        key={item.id}
        navigation={props.navigation}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <SeeAllButton title={props.title} />
      <ScrollView horizontal={true}>{renderListItems()}</ScrollView>
    </View>
  );
};
export default SectionPaths;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  seeAllButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
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

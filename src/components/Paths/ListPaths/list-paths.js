import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';

const ListPaths = (props) => {
  const paths = [
    {
      id: 1,
      title: 'React Native',
      numberCourses: 12,
      duration: 30,
      averageRating: 4.2,
    },
    {
      id: 2,
      title: 'Swift',
      numberCourses: 16,
      duration: 50,
    },
    {
      id: 3,
      title: 'Android',
      numberCourses: 12,
      duration: 30,
      averageRating: 4.2,
    },
  ];
  const renderItem = (item) => {
    return <ListCoursesItem item={item} navigation={props.navigation} />;
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={paths}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default ListPaths;
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center',
  },
  searchView: {
    flexDirection: 'row',
    margin: 5,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    margin: 5,
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

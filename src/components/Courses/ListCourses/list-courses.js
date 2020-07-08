import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  SectionList,
  Text,
} from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
import Separator from '../../Separator';

const ListCourses = (props) => {
  const courses = [
    {
      id: 1,
      title: 'React Native',
      author: 'Hai Pham',
      level: 'Advance',
      released: 'May 6, 2020',
      duration: 30,
      averageRating: 4.2,
      totalRating: 210,
    },
    {
      id: 2,
      title: 'Swift',
      author: 'Hai Pham',
      level: 'Advance',
      released: 'June 6, 2019',
      duration: 40,
      averageRating: 5,
      totalRating: 910,
    },
    {
      id: 3,
      title: 'Android',
      author: 'Nguyen Cuong',
      level: 'Advance',
      released: 'June 5, 2019',
      duration: 40,
      averageRating: 4.5,
      totalRating: 190,
    },
  ];
  const renderItem = (item) => {
    return <ListCoursesItem item={item} navigation={props.navigation} />;
  };
  const renderHeader = (title) => {
    return <Text style={styles.header}>{title}</Text>;
  };
  const searchView = () => {
    return (
      <View style={styles.searchView}>
        <TextInput style={styles.textInput} placeholder="Search courses" />
        <Button
          title="Search"
          onPress={() => console.log('Pressed on Search button')}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courses}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={Separator}
        // ListHeaderComponent={searchView}
      />
      {/* <SectionList
        sections={courses}
        renderItem={({item}) => renderItem(item)}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
      /> */}
    </View>
  );
};

export default ListCourses;
const styles = StyleSheet.create({
  container: {
    margin: 10,
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

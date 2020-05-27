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

const ListCourses = (props) => {
  const courses = [
    {
      title: 'Mobile',
      data: [
        {
          id: 1,
          title: 'React Native',
          author: 'Hai Pham',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '30 hours',
        },
        {
          id: 2,
          title: 'Swift',
          author: 'Hai Pham',
          level: 'Advance',
          released: 'June 6, 2019',
          duration: '40 hours',
        },
        {
          id: 3,
          title: 'Android',
          author: 'Nguyen Cuong',
          level: 'Advance',
          released: 'June 5, 2019',
          duration: '40 hours',
        },
      ],
    },
    {
      title: 'Web',
      data: [
        {
          id: 1,
          title: 'React Js',
          author: 'Hai Pham',
          level: 'Advance',
          released: 'May 6, 2020',
          duration: '30 hours',
        },
        {
          id: 2,
          title: 'Angular',
          author: 'Hai Pham',
          level: 'Advance',
          released: 'June 6, 2019',
          duration: '40 hours',
        },
        {
          id: 3,
          title: 'Express Js',
          author: 'Nguyen Cuong',
          level: 'Advance',
          released: 'June 5, 2019',
          duration: '40 hours',
        },
      ],
    },
  ];
  const renderItem = (item) => {
    return <ListCoursesItem item={item} />;
  };
  const renderHeader = (title) => {
    return (
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
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
    <View>
      {/* <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courses}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={searchView}
      /> */}
      <SectionList
        sections={courses}
        renderItem={({item}) => renderItem(item)}
        renderSectionHeader={({section: {title}}) => renderHeader(title)}
      />
    </View>
  );
};

export default ListCourses;
const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center',
  },
  searchView: {
    flexDirection: 'row',
    margin: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    borderRadius: 20,
    margin: 5,
  },
  header: {
    color: 'white',
  },
});

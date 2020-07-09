import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Text,
} from 'react-native';
import Separator from '../../Separator';
import {courses} from '../../../globals/fake-data';
import CourseItemVertical from './CourseItem';

const ListCoursesVertical = (props) => {
  const renderItem = (item) => {
    return <CourseItemVertical item={item} navigation={props.navigation} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={props.Header}
      />
    </View>
  );
};

export default ListCoursesVertical;
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

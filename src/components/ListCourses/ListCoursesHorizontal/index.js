import React from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import CourseItemHorizontal from './CourseItem';
import SeeAllButton from '../../SeeAllButton';
import {courses} from '../../../globals/fake-data';
import {ScaleSize} from '../../../globals/styles';

const ListCoursesHorizontal = (props) => {
  const {navigation, title} = props;
  const renderCourseItem = (item) => (
    <CourseItemHorizontal item={item} navigation={navigation} />
  );
  const showAllCourses = () => {
    Alert.alert('Comming soon');
  };
  return (
    <View style={styles.container}>
      <SeeAllButton title={title} onPress={showAllCourses} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={courses}
        renderItem={({item}) => renderCourseItem(item)}
        keyExtractor={(item, index) => index.toString()}
        getItemLayout={(data, index) => ({
          length: ScaleSize.scaleSizeWidth(210),
          offset: ScaleSize.scaleSizeWidth(210) * index,
          index,
        })}
      />
    </View>
  );
};
export default ListCoursesHorizontal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
  },
});

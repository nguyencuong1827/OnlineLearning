import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CourseItemHorizontal from './CourseItem';
import SeeAllButton from '../../SeeAllButton';
import {ScaleSize, DistanceScale} from '../../../globals/styles';

const ListCoursesHorizontal = (props) => {
  const {data, navigation, title, showAll} = props;
  const renderCourseItem = (item) => (
    <CourseItemHorizontal item={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <SeeAllButton title={title} onPress={showAll} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
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
    marginLeft: DistanceScale.spacing_14,
    marginBottom: DistanceScale.spacing_10,
  },
});

import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CourseItemHorizontal from './CourseItem';
import SeeAllButton from '../../SeeAllButton';
import {ScaleSize, Distance} from '../../../globals/styles';
import EmptyCourse from './EmptyCourse';
import {ShowListCourseScreen} from '../../../globals/constants/screen-name';

const ListCoursesHorizontal = (props) => {
  const {data, navigation, title, showAll} = props;
  const renderCourseItem = (item) => (
    <CourseItemHorizontal item={item} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <EmptyCourse title={title} />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};
export default ListCoursesHorizontal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Distance.spacing_14,
    marginBottom: Distance.spacing_10,
  },
});

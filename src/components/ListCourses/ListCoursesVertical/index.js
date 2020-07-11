import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Separator from '../../Separator';
import {courses} from '../../../globals/fake-data';
import CourseItemVertical from './CourseItem';
import {ScaleSize} from '../../../globals/styles';

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
        getItemLayout={(data, index) => ({
          length: ScaleSize.scaleSizeWidth(65),
          offset: ScaleSize.scaleSizeWidth(65) * index,
          index,
        })}
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

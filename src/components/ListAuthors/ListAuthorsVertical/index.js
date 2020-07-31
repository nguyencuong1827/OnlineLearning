import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Separator from '../../Separator';
import AuthorElement from './AuthorElement';
import {ScaleSize, DistanceScale} from '../../../globals/styles';

const ListAuthorsVertical = (props) => {
  const {navigation, data, renderHeader} = props;
  const renderItem = (item) => {
    return (
      <AuthorElement
        name={item.name}
        numberCourses={item.numberCourses}
        urlAvatar={item.urlAvatar}
        navigation={navigation}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        getItemLayout={(data, index) => ({
          length: ScaleSize.scaleSizeWidth(65),
          offset: ScaleSize.scaleSizeWidth(65) * index,
          index,
        })}
      />
    </View>
  );
};

export default ListAuthorsVertical;
const styles = StyleSheet.create({
  container: {
    padding: DistanceScale.spacing_10,
  },
});

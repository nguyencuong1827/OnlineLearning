import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import SeeAllButton from '../../../components/SeeAllButton';
import PathItem from './PathItem';
import {paths} from '../../../globals/fake-data';
import {ScaleSize} from '../../../globals/styles';

const ListPathsHorizontal = (props) => {
  const renderListItems = (item) => (
    <PathItem item={item} key={item.id} navigation={props.navigation} />
  );

  return (
    <View style={styles.container}>
      <SeeAllButton title="Paths" />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={paths}
        renderItem={({item}) => renderListItems(item)}
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
export default ListPathsHorizontal;
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

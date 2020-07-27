import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, Alert} from 'react-native';
import {topics} from '../../../globals/fake-data';
import Banner from '../../../components/Banner';
import {ScaleSize} from '../../../globals/styles';
const ListTopicsHorizontal = () => {
  const renderItem = (item) => {
    const indexSpace = item.name.indexOf(' ');
    const title1 = item.name.slice(0, indexSpace);
    const title2 = item.name.slice(indexSpace + 1, item.name.length);
    return (
      <Banner
        buttonStyle={{button: styles.topicImgButton}}
        title1Style={{title1: styles.title1}}
        title2Style={{title2: styles.title2}}
        title1={title1.toUpperCase()}
        title2={title2.toUpperCase()}
        source={item.urlImg}
        onPress={() => Alert.alert('Comming soon!')}
      />
    );
  };
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        nestedScrollEnabled={true}
        numColumns={topics.length / 2}
        alwaysBounceVertical={false}
        data={topics}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => renderItem(item)}
      />
    </ScrollView>
  );
};

export default ListTopicsHorizontal;
const styles = StyleSheet.create({
  topicImgButton: {
    height: ScaleSize.scaleSizeHeight(80),
    width: ScaleSize.scaleSizeWidth(158),
    margin: 5,
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  title2: {
    fontSize: 12,
    color: 'white',
  },
});

import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const ListCoursesItem = (props) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={require('../../../../assets/rambutan.jpg')}
      />
      <View style={styles.content}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
      </View>
    </View>
  );
};
export default ListCoursesItem;
const styles = StyleSheet.create({
  item: {
    margin: 5,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 50,
  },
  content: {
    margin: 5,
  },
  darkText: {
    color: 'darkgray',
  },
});

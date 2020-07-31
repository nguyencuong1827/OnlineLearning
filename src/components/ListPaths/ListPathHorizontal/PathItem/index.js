import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScaleSize} from '../../../../globals/styles';

const PathsItem = (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image style={styles.img} source={props.item.urlImg} />
        <View style={styles.content}>
          <Text style={styles.title}>{props.item.name}</Text>
          <Text style={styles.darkText}>{props.item.numberCourses} hours</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default PathsItem;
const styles = StyleSheet.create({
  item: {
    marginRight: 5,
    marginLeft: 5,
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(160),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  img: {
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(100),
  },
  content: {
    backgroundColor: '#d9d9d9',
    width: ScaleSize.scaleSizeWidth(210),
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  darkText: {
    color: 'gray',
    marginBottom: 3,
  },
  title: {
    marginBottom: 3,
  },
});

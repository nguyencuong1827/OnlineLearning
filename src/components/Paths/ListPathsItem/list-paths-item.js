import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ListPathsItem = (props) => {
  const onPressListItem = () => {
    props.navigation.navigate('PathDetail');
  };
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        onPressListItem();
      }}>
      <Image
        style={styles.img}
        source={require('../../../../assets/images/jackfruit.jpg')}
      />
      <View style={styles.content}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>
          {props.item.numberCourses} courses . {props.item.duration} hours
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListPathsItem;
const styles = StyleSheet.create({
  item: {
    margin: 10,
    flexDirection: 'row',
  },
  img: {
    width: 150,
    height: 80,
  },
  content: {
    height: 80,
    paddingLeft: 10,
  },
  darkText: {
    color: 'gray',
  },
});

import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const SectionPathsItem = (props) => {
  const goToPathDetail = () => props.navigation.navigate('PathDetail');
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={goToPathDetail}>
        <Image
          style={styles.img}
          source={require('../../../../assets/images/jackfruit.jpg')}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.darkText}>{props.item.numberCourses} hours</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SectionPathsItem;
const styles = StyleSheet.create({
  item: {
    marginRight: 5,
    marginLeft: 5,
    width: 230,
    height: 220,
  },
  img: {
    width: 230,
    height: 110,
  },
  content: {
    backgroundColor: 'white',
    width: 230,
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

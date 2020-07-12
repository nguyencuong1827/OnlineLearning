import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Rating} from 'react-native-elements';

const SectionCoursesItem = (props) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={require('../../../../assets/images/watermelon.jpg')}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.releasedDate} . ${props.item.duration} hours`}</Text>
        <View style={styles.rating}>
          <Rating
            imageSize={20}
            readonly
            startingValue={props.item.averageRating}
          />
          <Text style={styles.darkText}>
            {'   '}({props.item.totalRating})
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SectionCoursesItem;
const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    marginLeft: 10,
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
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  darkText: {
    color: 'gray',
    marginBottom: 3,
  },
  title: {
    marginBottom: 3,
  },
  rating: {
    flexDirection: 'row',
  },
});

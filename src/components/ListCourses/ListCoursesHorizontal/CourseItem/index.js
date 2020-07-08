import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScaleSize} from '../../../../globals/styles';
import Rating from 'react-native-star-rating';

const CourseItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        style={styles.img}
        activeOpacity={0.6}
        source={require('../../../../../assets/images/watermelon.jpg')}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released} . ${props.item.duration} hours`}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            disabled={true}
            maxStars={5}
            rating={props.item.averageRating}
            starSize={16}
            fullStarColor="#f39c12"
            starStyle={styles.starRating}
          />
          <Text style={styles.darkText}>
            {'   '}({props.item.totalRating})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CourseItem;
const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    marginLeft: 10,
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(200),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  img: {
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(100),
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
    backgroundColor: '#d9d9d9',
    height: ScaleSize.scaleSizeWidth(200),
  },
  darkText: {
    color: 'gray',
    marginBottom: 3,
  },
  title: {
    marginBottom: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  starRating: {
    marginTop: 3,
  },
});

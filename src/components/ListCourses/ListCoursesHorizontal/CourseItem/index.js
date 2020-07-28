import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScaleSize, Colors} from '../../../../globals/styles';
import Rating from 'react-native-star-rating';
import {CourseDetailScreen} from '../../../../globals/constants/screen-name';

const CourseItemHorizontal = (props) => {
  const {navigation, item} = props;
  const showCourseDetail = () => {
    navigation.navigate(CourseDetailScreen, {course: props.item});
  };
  return (
    <TouchableOpacity style={styles.item} onPress={showCourseDetail}>
      <Image style={styles.img} activeOpacity={0.6} source={item.urlImg} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.darkText}>{item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${item.level} . ${item.releasedDate} . ${item.duration} hours`}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            disabled={true}
            maxStars={5}
            rating={item.averageRating}
            starSize={15}
            fullStarColor={Colors.yellow}
            starStyle={styles.starRating}
          />
          <Text style={styles.darkText}>
            {'   '}({item.totalRating})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CourseItemHorizontal;
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
  name: {
    marginBottom: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  starRating: {
    padding: 2,
  },
});

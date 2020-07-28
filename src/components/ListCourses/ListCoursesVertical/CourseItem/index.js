import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Rating from 'react-native-star-rating';
import {ScaleSize} from '../../../../globals/styles';
import {CourseDetailScreen} from '../../../../globals/constants/screen-name';

const CourseItemVertical = (props) => {
  const {navigation, item} = props;
  const showCourseDetail = () => {
    navigation.navigate(CourseDetailScreen);
  };
  return (
    <TouchableOpacity style={styles.item} onPress={showCourseDetail}>
      <Image style={styles.img} source={item.urlImg} />
      <View style={styles.content}>
        <Text>{item.name}</Text>
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
            fullStarColor="#f39c12"
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
export default CourseItemVertical;
const styles = StyleSheet.create({
  item: {
    margin: 10,
    flexDirection: 'row',
    height: ScaleSize.scaleSizeWidth(80),
  },
  img: {
    width: ScaleSize.scaleSizeWidth(80),
    height: ScaleSize.scaleSizeWidth(50),
  },
  content: {
    paddingLeft: 10,
  },
  darkText: {
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  starRating: {
    padding: 2,
  },
});

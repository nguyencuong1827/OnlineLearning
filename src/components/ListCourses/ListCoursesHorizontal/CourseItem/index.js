import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  ScaleSize,
  Colors,
  DistanceScale,
  Typography,
} from '../../../../globals/styles';
import Rating from 'react-native-star-rating';
import {CourseDetailScreen} from '../../../../globals/constants/screen-name';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.content = {
    ...styles.content,
    backgroundColor: theme.buttonSeeAllBackground,
  };
  styles.name = {...styles.name, color: theme.colorMainText};
  styles.info = {...styles.info, color: theme.colorSubText};
};
const CourseItemHorizontal = (props) => {
  const {navigation, item} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const showCourseDetail = () => {
    navigation.navigate(CourseDetailScreen, {course: item});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showCourseDetail}>
      <Image style={styles.img} activeOpacity={0.6} source={item.urlImg} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.info}>{item.author}</Text>
        <Text
          style={
            styles.info
          }>{`${item.level} . ${item.releasedDate} . ${item.duration} hours`}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            disabled={true}
            maxStars={5}
            rating={item.averageRating}
            starSize={Typography.fontSize16}
            fullStarColor={Colors.yellow}
            starStyle={styles.starRating}
          />
          <Text style={styles.info}>
            {'   '}({item.totalRating})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CourseItemHorizontal;
const styles = StyleSheet.create({
  container: {
    marginRight: DistanceScale.spacing_12,
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(200),
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
    padding: DistanceScale.spacing_10,
    height: ScaleSize.scaleSizeWidth(200),
  },
  info: {
    color: 'gray',
    marginBottom: DistanceScale.superSmall,
    fontSize: Typography.fontSize14,
  },
  name: {
    marginBottom: DistanceScale.superSmall,
    fontSize: Typography.fontSize16,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: DistanceScale.superSmall,
  },
  starRating: {
    padding: 2,
  },
});

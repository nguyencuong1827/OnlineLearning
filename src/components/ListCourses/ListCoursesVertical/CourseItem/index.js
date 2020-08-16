import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Rating from 'react-native-star-rating';
import {ScaleSize, Typography, Distance} from '../../../../globals/styles';
import {CourseDetailScreen} from '../../../../globals/constants/screen-name';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.name = {...styles.name, color: theme.colorMainText};
  styles.info = {...styles.info, color: theme.colorSubText};
};

const CourseItemVertical = (props) => {
  const {navigation, item} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const showCourseDetail = () => {
    navigation.navigate(CourseDetailScreen, {course: item});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showCourseDetail}>
      <Image style={styles.img} source={item.urlImg} />
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
            starSize={Typography.fontSize14}
            fullStarColor="#f39c12"
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
export default CourseItemVertical;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: Distance.spacing_8,
    height: ScaleSize.scaleSizeWidth(80),
  },
  img: {
    width: ScaleSize.scaleSizeWidth(80),
    height: ScaleSize.scaleSizeWidth(50),
  },
  content: {
    paddingLeft: 10,
  },
  name: {
    fontSize: Typography.fontSize16,
  },
  info: {
    marginTop: Distance.superSmall,
    fontSize: Typography.fontSize14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Distance.superSmall,
  },
  starRating: {
    marginTop: Distance.superSmall,
    padding: 2,
  },
});

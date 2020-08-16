import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  ScaleSize,
  Colors,
  Distance,
  Typography,
} from '../../../../globals/styles';
import Rating from 'react-native-star-rating';
import {CourseDetailScreen} from '../../../../globals/constants/screen-name';
import {ThemeContext} from '../../../../providers/theme-propvider';
import Moment from 'moment';

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
    navigation.navigate(CourseDetailScreen, {id: item.id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={showCourseDetail}>
      <Image
        style={styles.img}
        activeOpacity={0.6}
        source={{uri: item.imageUrl}}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.info}>
          {item['instructor.user.name'] || item.instructorName || item.name}
        </Text>
        <Text style={styles.info}>{`${Moment(item.createdAt).format(
          'MMMM Do',
        )}  ${item.totalHours} hours`}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            disabled={true}
            maxStars={5}
            rating={
              (item.presentationPoint +
                item.formalityPoint +
                item.contentPoint) /
              3
            }
            starSize={Typography.fontSize16}
            fullStarColor={Colors.yellow}
            starStyle={styles.starRating}
          />
          <Text style={styles.info}>
            {'   '}({item.ratedNumber})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CourseItemHorizontal;
const styles = StyleSheet.create({
  container: {
    marginRight: Distance.spacing_12,
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
    padding: Distance.spacing_10,
    height: ScaleSize.scaleSizeWidth(200),
  },
  info: {
    color: 'gray',
    marginBottom: Distance.superSmall,
    fontSize: Typography.fontSize14,
  },
  name: {
    marginBottom: Distance.superSmall,
    fontSize: Typography.fontSize16,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: Distance.superSmall,
  },
  starRating: {
    padding: 2,
  },
});

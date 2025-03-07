import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Rating from 'react-native-star-rating';
import {
  ScaleSize,
  Typography,
  Distance,
  Colors,
  Size,
} from '../../../../globals/styles';
import {CourseDetailScreen} from '../../../../globals/constants/screen-name';
import {ThemeContext} from '../../../../providers/theme-propvider';
import Moment from 'moment';
import {Bar} from 'react-native-progress';
import {LanguageContext} from '../../../../providers/language-provider';

const setStyleWithTheme = (theme) => {
  styles.name = {...styles.name, color: theme.colorMainText};
  styles.info = {...styles.info, color: theme.colorSubText};
};

const CourseItemVertical = (props) => {
  const {navigation, item} = props;
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  setStyleWithTheme(theme);

  const showCourseDetail = () => {
    navigation.navigate(CourseDetailScreen, {id: item.id});
  };
  const unit = item.totalHours
    ? `${language === 'eng' ? 'hours' : 'giờ'}`
    : `${language === 'eng' ? 'students' : 'học sinh'}`;
  const renderViewRating = () => {
    return (
      <View>
        <View style={styles.ratingContainer}>
          <Rating
            disabled={true}
            maxStars={5}
            rating={
              (item.presentationPoint +
                item.formalityPoint +
                item.contentPoint) /
                3 || item.coursePresentationPoint
            }
            starSize={Typography.fontSize14}
            fullStarColor={Colors.yellow}
            starStyle={styles.starRating}
          />
          <Text style={styles.info}>
            {'   '}({item.ratedNumber || 0})
          </Text>
        </View>
        <Text style={styles.price}>
          {item.prince !== '0'
            ? `${language === 'eng' ? 'Free' : 'Miễn phí'}`
            : price}
        </Text>
      </View>
    );
  };
  const renderDateUpdated = () => {
    return (
      <Text style={styles.info}>{`${Moment(item.updatedAt).format(
        'MMMM Do',
      )} . ${item.totalHours || item.courseSoldNumber} ${unit}`}</Text>
    );
  };
  const renderProcess = () => {
    return (
      <View>
        <Text style={styles.info}>
          {language === 'eng' ? 'Lastest learn:' : 'Lần học cuối: '}{' '}
          {`${Moment(item.latestLearnTime).format('MMMM Do')}`}
        </Text>
        <View style={styles.ratingContainer}>
          <Bar
            progress={item.process / 100}
            color={Colors.orange}
            height={Size.scaleSize(5)}
            width={Size.scaleSize(120)}
            unfilledColor={Colors.white52}
            borderColor={Colors.white52}
            style={styles.bar}
          />
          <Text style={styles.info}>{Math.floor(item.process)}% complete</Text>
        </View>
      </View>
    );
  };
  const price = `${item.price} đ`;
  return (
    <TouchableOpacity style={styles.container} onPress={showCourseDetail}>
      <Image
        style={styles.img}
        source={{uri: item.imageUrl || item.courseImage}}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{item.title || item.courseTitle}</Text>
        <Text style={styles.info}>
          {item['instructor.user.name'] || item.name || item.instructorName}
        </Text>
        {item.totalHours || item.courseSoldNumber ? renderDateUpdated() : null}
        {item.process > 0 ? renderProcess() : null}
        {item.process === 0 && item.process !== undefined ? (
          <Text style={styles.start}>
            {language === 'eng' ? 'START NOW' : 'BẮT ĐẦU'}
          </Text>
        ) : null}
        {item.process === undefined ? renderViewRating() : null}
      </View>
    </TouchableOpacity>
  );
};
export default CourseItemVertical;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: Distance.spacing_8,
    height: ScaleSize.scaleSizeWidth(90),
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
    textAlignVertical: 'center',
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
  bar: {
    marginRight: Distance.spacing_5,
  },
  start: {
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
    color: Colors.orange,
  },
  price: {
    color: Colors.red,
    fontSize: Typography.fontSize18,
    marginLeft: Distance.superSmall,
  },
});

import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RatingComponent from '../RatingComponent';
import {ThemeContext} from '../../../providers/theme-propvider';
import {
  Typography,
  BoxModel,
  Styles,
  Distance,
  Size,
} from '../../../globals/styles';
import PrimaryButton from '../../Authentication/PrimaryButton';
import {LanguageContext} from '../../../providers/language-provider';

const StudentFeedback = (props) => {
  const {ratings, onPress, averagePoint} = props;
  const {theme2} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  return (
    <View style={[Styles.fillColumnStart, BoxModel.marginVertical]}>
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        {language === 'eng' ? 'Student feedback' : 'Đánh giá của học sinh'}
      </Text>
      {averagePoint ? (
        <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
          {Number(averagePoint)}{' '}
          {language === 'eng' ? 'average rating' : 'xếp hạng trung bình'}
        </Text>
      ) : undefined}
      {ratings ? <RatingComponent ratings={ratings} /> : undefined}
      <PrimaryButton
        title={language === 'eng' ? 'See All Feedback' : 'Xem tất cả đánh giá'}
        onPress={() => onPress()}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme2.primaryColor}]}
      />
      <View
        style={[
          styles.divide,
          styles.divideContainer,
          {backgroundColor: theme2.DialogColor},
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12.5,
  },
  link: {
    ...Styles.fillRowStart,
    ...BoxModel.bottomMargin,
    alignSelf: 'flex-start',
    marginLeft: Distance.spacing_16,
  },
  linkText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize16,
    marginLeft: Distance.spacing_8,
  },
  divide: {
    height: 1,
  },
  buttonContainer: {
    width: Size.scaleSize(200),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: Distance.spacing_14,
  },
  rating: {
    marginLeft: 10,
  },
  divideContainer: {
    marginTop: Distance.spacing_14,
  },
});
export default StudentFeedback;

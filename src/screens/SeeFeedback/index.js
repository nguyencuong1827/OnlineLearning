import React, {useContext, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';
import RatingComponent from '../../components/HeaderCourseDetail/RatingComponent';

import FeedbackItem from '../../components/FeedBackItem';
import PrimaryButton from '../../components/Authentication/PrimaryButton';
import {ThemeContext} from '../../providers/theme-propvider';
import {
  Styles,
  BoxModel,
  Size,
  Distance,
  Typography,
} from '../../globals/styles';
import {WriteFeedBackScreen} from '../../globals/constants/screen-name';

const SeeFeedBack = (props) => {
  const {navigation, route} = props;
  const [ratings] = useState(route.params.params.ratings);
  const [averagePoint] = useState(route.params.params.averagePoint);
  const [contentPoint] = useState(route.params.params.contentPoint);
  const [presentationPoint] = useState(route.params.params.presentationPoint);
  const [formalityPoint] = useState(route.params.params.formalityPoint);
  const {theme2} = useContext(ThemeContext);
  const feedbackContent = () => {
    if (ratings.ratingList) {
      return ratings.ratingList.map((itemFeedBack) => (
        <FeedbackItem itemFeedBack={itemFeedBack} key={itemFeedBack.id} />
      ));
    }
  };
  const writeFeedBack = () => {
    navigation.navigate(WriteFeedBackScreen, {
      courseId: route.params.params.courseId,
    });
  };
  return (
    <ScrollView style={{backgroundColor: theme2.themeColor}}>
      <RatingComponent ratings={ratings} />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        {Number(averagePoint)} average rating
      </Text>

      <View style={[Styles.fillRowBetween, BoxModel.smallMarginHorizontal]}>
        <View style={styles.row}>
          <Text
            style={[
              Typography.fontRegular,
              {color: theme2.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            Content: {contentPoint ? contentPoint.toFixed(2) : 0}
          </Text>
          <StarRating
            disabled={false}
            maxStars={1}
            starSize={15}
            rating={5}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={[
              Typography.fontRegular,
              {color: theme2.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            Presentation: {presentationPoint ? presentationPoint.toFixed(2) : 0}
          </Text>
          <StarRating
            disabled={false}
            maxStars={1}
            starSize={15}
            rating={5}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
        </View>
        <View style={styles.row}>
          <Text
            style={[
              Typography.fontRegular,
              {color: theme2.primaryTextColor, fontSize: Typography.fontSize14},
            ]}>
            Formality: {formalityPoint ? formalityPoint.toFixed(2) : 0}
          </Text>
          <StarRating
            disabled={false}
            maxStars={1}
            starSize={15}
            rating={5}
            fullStarColor={'#f1c40f'}
            containerStyle={styles.rating}
          />
        </View>
      </View>
      <PrimaryButton
        title="Write your Feedback"
        onPress={writeFeedBack}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme2.primaryColor}]}
      />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        Student feedback
      </Text>
      {feedbackContent()}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  row: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: Size.scaleSize(200),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: Distance.spacing_14,
  },
});
export default SeeFeedBack;

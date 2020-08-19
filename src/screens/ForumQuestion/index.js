import React, {useState, useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import QuestionComponent from '../../components/LessonCourse/QuestionComponent';

import Moment from 'moment';
import {ThemeContext} from '../../providers/theme-propvider';
import {BoxModel, Typography, Size, Styles} from '../../globals/styles';

const onPressResponse = () => {};
const ForumQuestion = (props) => {
  const {route} = props;
  const [itemQuestion] = useState(route.params.itemQuestion);
  const {theme2} = useContext(ThemeContext);
  const getCorrectAnswer = () => {
    if (itemQuestion.forumAnswers) {
      return itemQuestion.forumAnswers.map((answer) => (
        <View>
          <Text
            key={answer.id}
            style={[
              BoxModel.smallMarginHorizontal,
              Typography.fontRegular,
              {fontSize: Typography.fontSize16, color: theme2.primaryTextColor},
            ]}>
            {answer.content}
          </Text>
        </View>
      ));
    }
  };
  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      console.log(url);
      return (
        '<FastImage style={BoxModel.tinyMargin} source={{uri: ' + url + '}} />'
      );
    });
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }
  return (
    <ScrollView style={{backgroundColor: theme2.themeColor}}>
      <QuestionComponent
        itemQuestion={itemQuestion}
        onPressResponse={onPressResponse}
        key={itemQuestion.id}
      />
      {itemQuestion.repliedNumber === 0 ? undefined : (
        <View>
          <View style={Styles.rowCross}>
            <View
              style={[
                Styles.center,
                BoxModel.tinyPaddingVertical,
                BoxModel.margin,
                {
                  backgroundColor: theme2.successColor,
                  width: Size.scaleSize(80),
                  height: Size.scaleSize(50),
                },
              ]}>
              <Text
                style={[
                  Typography.fontBold,
                  {color: theme2.whiteColor, fontSize: Typography.fontSize18},
                ]}>
                Answer
              </Text>
            </View>
            <Text
              style={[
                Typography.fontBold,
                BoxModel.tinyMarginVertical,
                {color: theme2.grayColor, fontSize: Typography.fontSize16},
              ]}>
              Update at {''}
              {Moment(itemQuestion.forumAnswers.updatedAt).format(
                'MMM DD, yyyy',
              )}
            </Text>
            {/*  */}
          </View>
          {getCorrectAnswer()}
          <View
            style={[
              BoxModel.marginVertical,
              {height: Size.scaleSize(1), backgroundColor: theme2.DialogColor},
            ]}
          />
        </View>
      )}
    </ScrollView>
  );
};
export default ForumQuestion;

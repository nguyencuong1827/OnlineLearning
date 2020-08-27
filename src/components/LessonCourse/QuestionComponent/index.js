/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Moment from 'moment';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Styles, BoxModel, Typography, Size} from '../../../globals/styles';
import {LanguageContext} from '../../../providers/language-provider';

const QuestionComponent = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const {itemQuestion, onPressResponse} = props;
  const [role, setRole] = useState('');
  const getThemeUser = (title) => {
    switch (title) {
      case 'INSTRUCTOR': {
        return theme2.warningColor;
      }
      case 'STUDENT': {
        return theme2.StudentColor;
      }
      default:
        return theme2.primaryColor;
    }
  };

  useEffect(() => {
    if (itemQuestion.user.type === 'INSTRUCTOR') {
      if (language === 'vn') {
        setRole('TÁC GIẢ');
      } else {
        setRole('INSTRUCTOR');
      }
    } else {
      if (language === 'vn') {
        setRole('HỌC SINH');
      } else {
        setRole('STUDENT');
      }
    }
  }, []);
  return (
    <View key={itemQuestion.id} style={Styles.fillColumn}>
      <View style={Styles.fillRowStart}>
        <View
          style={[
            Styles.columnCross,
            styles.avatarContainer,
            BoxModel.tinyMargin,
          ]}>
          <FastImage
            style={[Styles.avatarIcon, BoxModel.tinyMarginVertical]}
            source={{
              uri: itemQuestion.user.avatar,
            }}
          />

          <View
            style={[
              Styles.center,
              styles.avatarContainer,
              BoxModel.tinyPaddingVertical,
              {backgroundColor: getThemeUser(itemQuestion.user.type)},
            ]}>
            <Text
              style={[
                Typography.fontBold,
                {color: theme2.whiteColor, fontSize: Typography.fontSize14},
              ]}>
              {role}
            </Text>
          </View>
        </View>
        <View style={[Styles.fillColumnStart, BoxModel.smallMarginHorizontal]}>
          <Text
            style={[
              styles.textHeader,
              BoxModel.tinyMarginVertical,
              {color: theme2.primaryColor},
            ]}>
            {itemQuestion.title}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {
                color: theme2.primaryTextColor,
                fontSize: Typography.fontSize14,
              },
            ]}>
            {itemQuestion.content}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              styles.authorContainer,
              BoxModel.tinyMarginVertical,
              {color: theme2.grayColor},
            ]}>
            {itemQuestion.user.name} -{' '}
            {Moment(itemQuestion.updatedAt).format('MMM DD, yyyy')}
          </Text>
        </View>
      </View>
      <TouchableHighlight
        onPress={() => onPressResponse(itemQuestion)}
        underlayColor={theme2.overlayColor}>
        <Text
          style={[
            Typography.fontRegular,
            BoxModel.margin,
            {color: theme2.primaryColor, fontSize: Typography.fontSize14},
          ]}>
          {itemQuestion.repliedNumber === 0 ? 'No' : itemQuestion.repliedNumber}{' '}
          {language === 'eng' ? 'responses' : 'phản hổi'}
        </Text>
      </TouchableHighlight>
      <View style={[styles.divide, {backgroundColor: theme2.DialogColor}]} />
    </View>
  );
};
const styles = StyleSheet.create({
  avatarContainer: {
    width: Size.scaleSize(70),
  },
  divide: {
    height: 1,
  },
  authorContainer: {
    alignSelf: 'flex-end',
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
});

export default QuestionComponent;

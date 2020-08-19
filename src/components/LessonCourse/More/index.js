import React, {useContext, useState, useEffect} from 'react';
import {View, ScrollView, TouchableHighlight, Share} from 'react-native';
import {Text} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../providers/theme-propvider';
import {LessonContext} from '../../../providers/lesson-provider';
import {AuthenticationContext} from '../../../providers/authentication-provider';
import axiosClient from '../../../api/axiosClient';
import {Styles, BoxModel, Typography, Size} from '../../../globals/styles';
import configToken from '../../../api/config-token';
const MoreView = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const {userState} = useContext(AuthenticationContext);
  const [isLike, setLike] = useState(false);
  useEffect(() => {
    const checkLikeStatus = async () => {
      const url = '/user/get-course-like-status';
      try {
        let response = await axiosClient.get(
          `${url}/${itemCourse.id}`,
          configToken(userState.token),
        );
        if (response.status === 200) {
          setLike(response.data.likeStatus);
        } else {
          console.log('get course like status: ', response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkLikeStatus();
  }, [itemCourse, userState]);
  const onPressShareCourse = async () => {
    try {
      const result = await Share.share({
        title: 'Share',
        message: 'This course is heplful ',
        url: `https://itedu.me/course-detail/${itemCourse.id}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onPressLike = async () => {
    const url = '/user/like-course';
    try {
      let response = await axiosClient.post(
        url,
        {courseId: itemCourse.id},
        configToken(userState.token),
      );
      console.log('like course: ', response);

      if (response.status === 200) {
        setLike(response.data.likeStatus);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const renderRow = (title, iconName, onPress, likeStatus = false) => {
    return (
      <View>
        <TouchableHighlight
          onPress={onPress}
          style={Styles.fillRowCenter}
          underlayColor={theme2.overlayColor}>
          <View
            style={[
              Styles.fillRowCenter,
              BoxModel.marginHorizontal,
              BoxModel.smallMarginVertical,
            ]}>
            <MaterialIcons
              name={iconName}
              size={Size.scaleSize(30)}
              color={likeStatus ? theme2.warningColor : theme2.grayDarkColor}
            />
            <Text
              style={[
                BoxModel.smallMarginHorizontal,
                {
                  color: theme2.primaryTextColor,
                  fontWeight: Typography.fontWeightNormal,

                  fontSize: Typography.fontSize16,
                },
              ]}>
              {title}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: theme2.themeColor}}>
      {renderRow('Download course', 'file-download')}
      {renderRow('About this course', 'info-outline')}
      {renderRow('Share this course', 'share', onPressShareCourse)}
      {renderRow('Notes', 'library-books')}
      {renderRow('Resources', 'dns')}
      {renderRow(
        isLike ? 'Remove course From favorites' : 'Add course to favorites',
        'star-border',
        onPressLike,
        isLike,
      )}
    </ScrollView>
  );
};
export default MoreView;

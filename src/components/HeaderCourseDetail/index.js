import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Share,
  Alert,
} from 'react-native';
import Title from './TitleItem';
import Author from './AuthorItem';
import InfoCourse from './InfoCourse';
import Feature from './SomeFeature';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FastImage from 'react-native-fast-image';
import WhatLearn from './WhatLearn';
import StudentFeedBack from './StudentFeedback';
import ProfileAuthor from './ProfileAuthor';

import * as screenName from '../../globals/constants/screen-name';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {
  Styles,
  BoxModel,
  Typography,
  Size,
  Distance,
} from '../../globals/styles';
import {ListCourseHorizontal} from '../ListCourses';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
const Demo = () => {
  return (
    <View>
      <Text>Demoo2</Text>
    </View>
  );
};

const HeaderCourseDetail = (props) => {
  const {item, navigation, route} = props;
  const {theme2} = useContext(ThemeContext);
  const {userState} = useContext(AuthenticationContext);
  const [isOwn, setIsOwn] = useState({});
  const [isLike, setLike] = useState(false);

  useEffect(() => {
    const checkOwnCourse = async () => {
      const url = '/user/check-own-course';
      try {
        let response = await axiosClient.get(
          `${url}/${item.id}`,
          configToken(userState.token),
        );
        if (response.status === 200) {
          setIsOwn(response.data.payload);
        }
      } catch (err) {
        console.log('checkout course: ', err);
      }
    };
    const checkLikeStatus = async () => {
      const url = '/user/get-course-like-status';
      if (item.id) {
        try {
          let response = await axiosClient.get(
            `${url}/${item.id}`,
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
      }
    };
    checkLikeStatus();
    checkOwnCourse();
  }, [item, userState]);
  const onPressAuthor = (itemAuthor) => {
    navigation.navigate(screenName.AuthorDetailScreen, {
      name: itemAuthor.name,
      id: item.instructorId,
    });
  };

  const onPressJoin = async (id, index) => {
    if (isOwn.isUserOwnCourse) {
      navigation.navigate(screenName.LessonCourseScreenStack, {
        screen: screenName.LessonCourseScreen,
        params: {id: item.id},
      });
    } else {
      const url = '/payment/get-free-courses';
      try {
        let response = await axiosClient.post(
          url,
          {courseId: item.id},
          configToken(userState.token),
        );
        if (response.status === 200) {
          navigation.navigate(screenName.LessonCourseScreenStack, {
            screen: screenName.LessonCourseScreen,
            params: {id: item.id},
          });
        }
      } catch ({response}) {
        console.log('payment: ', response.data);
      }
    }
  };
  const onPressLike = async () => {
    const url = '/user/like-course';
    try {
      let response = await axiosClient.post(
        url,
        {courseId: item.id},
        configToken(userState.token),
      );

      if (response.status === 200) {
        setLike(response.data.likeStatus);
      } else {
        console.log('user like course: ', response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onPressStudentFeedback = () => {
    navigation.navigate(screenName.FeedBackStack, {
      params: {
        item: item.ratings,
        averagePoint: item.averagePoint,
        contentPoint: item.contentPoint,
        presentationPoint: item.presentationPoint,
        formalityPoint: item.formalityPoint,
        courseId: item.id,
      },
    });
  };
  const dismiss = () => {
    navigation.goBack();
  };
  const onPressPlayVideo = () => {
    if (item.promoVidUrl) {
      navigation.navigate(screenName.PlayVideoScreen, {
        urlVideo: item.promoVidUrl,
        typeUploadVideoLesson: 1,
      });
    }
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Share',
        message: 'This course is helpful',
        url: `https://itedu.me/course-detail/${item.id}`,
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
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{backgroundColor: theme2.themeColor}}>
      <FastImage
        style={[
          styles.videoContainer,
          Styles.fillRow,
          {backgroundColor: theme2.backgroundColor},
        ]}
        source={{uri: item.imageUrl}}>
        <View
          style={{
            ...Styles.fillRowBetween,
            backgroundColor: theme2.blackWith05OpacityColor,
          }}>
          <TouchableHighlight
            onPress={dismiss}
            underlayColor={theme2.overlayColor}
            style={styles.closeButon}>
            <Ionicons
              name="close-outline"
              size={40}
              color={theme2.whiteWith07OpacityColor}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={onPressPlayVideo}
            underlayColor={theme2.overlayColor}
            style={Styles.center}>
            <MaterialIcons
              name="play-arrow"
              size={150}
              color={theme2.whiteWith07OpacityColor}
              style={Styles.center}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={onShare}
            underlayColor={theme2.overlayColor}
            style={styles.closeButon}>
            <Feather
              name="share"
              size={30}
              color={theme2.whiteWith07OpacityColor}
            />
          </TouchableHighlight>
        </View>
      </FastImage>
      <Title name={item.title} subtitle={item.subtitle} />
      <Author
        instructor={item.instructor}
        onPress={() => onPressAuthor(item.instructor)}
      />
      <InfoCourse
        videoNumber={item.videoNumber}
        timeToStart={item.createdAt}
        totalHour={item.totalHours}
        totalRate={item.ratedNumber}
        rate={
          (item.presentationPoint + item.formalityPoint + item.contentPoint) / 3
        }
        soldNumber={item.soldNumber}
        updatedAt={item.updatedAt}
      />
      <Feature
        isLike={isLike}
        isOwnCourse={isOwn}
        onPressLike={onPressLike}
        onPressJoin={onPressJoin}
        id={item.id}
      />
      <WhatLearn
        WhatLearnItem={item.learnWhat}
        requireItem={item.requirement}
        description={item.description}
      />
      {/* <ListCourseHorizontal
        title="The same topic"
        data={item.coursesLikeCategory}
        navigation={navigation}
      /> */}
      <ProfileAuthor
        data={item.instructor}
        onPress={() => onPressAuthor(item.instructor)}
      />

      <StudentFeedBack
        averagePoint={item.averagePoint}
        ratings={item.ratings}
      />
      <Text style={[styles.title, {color: theme2.primaryTextColor}]}>
        Curriculum
      </Text>
      {/* <LearningCheck /> */}
      {/* <SegmentControl /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  videoContainer: {
    width: Size.WIDTH,
    height: Size.HEIGHT / 2 - Size.scaleSize(100),
  },
  closeButon: {
    padding: Distance.spacing_12,
  },
});
export default HeaderCourseDetail;

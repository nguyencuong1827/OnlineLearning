/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext, useMemo} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableHighlight} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import Video from '../../components/LessonCourse/PlayVideo';
import YouTube from '../../components/LessonCourse/PLayYoutube';
import LessonTab from '../../components/LessonCourse/TopTabInfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../providers/theme-propvider';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {LessonContext} from '../../providers/lesson-provider';
import axiosClient from '../../api/axiosClient';
import {Size, BoxModel, Typography} from '../../globals/styles';
import configToken from '../../api/config-token';
import {useAsyncStorage} from '@react-native-community/async-storage';

const LessonCourse = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {userState} = useContext(AuthenticationContext);
  const insets = useSafeArea();

  const {
    setItemCourse,
    itemLesson,
    setItemLesson,
    time,
    setListDownload,
  } = useContext(LessonContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async () => {
      const url = '/lesson/update-current-time-learn-video';
      try {
        let response = await axiosClient.put(
          url,
          {
            lessonId: itemLesson.id,
            currentTime: time,
          },
          configToken(userState.token),
        );
        if (response.status === 200) {
          //console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    });

    return unsubscribe;
  }, [navigation, time, userState, itemLesson]);

  // const fetchDetail = async () => {
  //   const url = '/lesson/detail';
  //   try {
  //     let response = await axiosClient.get(
  //       `${url}/${route.params.id}/${itemLesson.id}`,
  //       configToken(userState.token),
  //     );
  //     if (response.status === 200) {
  //       setNextLessonID(response.data.payload.nextLessonId);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const findLesson = (section, lessonId) => {
    if (section) {
      const resultSection = section.find(({lesson}) =>
        lesson.find(({id}) => id === lessonId),
      );
      const result = resultSection.lesson.find(({id}) => id === lessonId);
      return result;
    }
    return null;
  };

  const fetchCourseDetailWithLesson = async () => {
    console.log('fetch');
    try {
      let url = '/course/detail-with-lesson';
      let resCourseDetail = await axiosClient.get(
        `${url}/${route.params.id}`,
        configToken(userState.token),
      );
      url = '/course/last-watched-lesson';
      let resLastLesson = await axiosClient.get(
        `${url}/${route.params.id}`,
        configToken(userState.token),
      );
      if (resCourseDetail.status === 200) {
        setItemCourse(resCourseDetail.data.payload);
        if (resLastLesson.status === 200) {
          const result = findLesson(
            resCourseDetail.data.payload.section,
            resLastLesson.data.payload.lessonId,
          );
          setItemLesson({
            ...result,
            videoUrl: resLastLesson.data.payload.videoUrl,
            currentTime: resLastLesson.data.payload.currentTime,
          });
        }
      }
    } catch ({response}) {
      console.log(response);
    }
  };

  useEffect(() => {
    fetchCourseDetailWithLesson();
  }, [route, userState]);

  const dismiss = () => {
    navigation.goBack();
  };
  const onCompleteVideo = async () => {
    console.log('complete');

    let url = '/lesson/update-status';
    try {
      let response = await axiosClient.post(
        url,
        {lessonId: itemLesson.id},
        configToken(userState.token),
      );
      if (response.status === 200) {
        await fetchCourseDetailWithLesson();
        //console.log(response.data.message);
      } else {
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderVideo = useMemo(() => {
    return (
      <Video
        urlVideo={itemLesson.videoUrl || ''}
        onCompleteVideo={onCompleteVideo}
      />
    );
  }, [itemLesson]);

  const renderYouTube = useMemo(() => {
    return (
      <YouTube
        urlVideo={itemLesson.videoUrl || ''}
        onCompleteVideo={onCompleteVideo}
      />
    );
  }, [itemLesson]);

  const renderVideoComponent = () => {
    if (itemLesson.videoUrl) {
      if (itemLesson.videoUrl.includes('https://youtube.com/embed')) {
        return renderYouTube;
      } else {
        return renderVideo;
      }
    }
  };

  const {getItem} = useAsyncStorage('@listDownload');
  const getListDownload = async () => {
    try {
      const item = await getItem();
      console.log(item);
      if (item !== null) {
        const jsonValue = JSON.parse(item);
        console.log(jsonValue);
        // console.log(jsonValue.listSearch);
        setListDownload(jsonValue.listDownload);
      }
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    getListDownload();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, {backgroundColor: theme2.themeColor}]}>
        {renderVideoComponent()}
        <View
          style={[styles.mainContainer, {backgroundColor: theme2.themeColor}]}>
          <LessonTab />
        </View>
      </View>
      <TouchableHighlight
        style={[
          styles.buttonDismiss,
          {
            bottom: Size.HEIGHT - insets.top - Size.scaleSize(40),
          },
        ]}
        onPress={dismiss}
        underlayColor={theme2.overlayColor}>
        <MaterialIcons
          name="expand-more"
          size={40}
          color={theme2.whiteWith07OpacityColor}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  maxHeightText: {
    height: null,
  },
  minHeightText: {
    height: 0,
  },

  checkContainer: {
    marginRight: 20,
  },
  image: {
    resizeMode: 'cover',
  },

  previewContainer: {
    borderWidth: 1,
    ...BoxModel.tinyPadding,

    ...BoxModel.marginHorizontal,
  },
  previewText: {
    ...Typography.fontRegular,
    fontSize: Typography.fontSize14,
  },
  buttonDismiss: {
    position: 'absolute',
    height: Size.scaleSize(50),
    left: Size.scaleSize(50),
    width: Size.scaleSize(50),
  },
});
export default LessonCourse;

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

const LessonCourse = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {navigation, route} = props;
  const {userState} = useContext(AuthenticationContext);
  const [nextLessonID, setNextLessonID] = useState('');
  const insets = useSafeArea();

  const {setItemCourse, itemLesson, setItemLesson, time} = useContext(
    LessonContext,
  );
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

  const fetchDetail = async () => {
    const url = '/lesson/detail';
    try {
      let response = await axiosClient.get(
        `${url}/${route.params.id}/${itemLesson.id}`,
        configToken(userState.token),
      );
      if (response.status === 200) {
        //console.log(response.data.payload.nextLessonId);
        setNextLessonID(response.data.payload.nextLessonId);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [route, userState, itemLesson]);

  useEffect(() => {
    const fetchCourseDetailWithLesson = async () => {
      const url = '/course/detail-with-lesson';
      try {
        let response = await axiosClient.get(
          `${url}/${route.params.id}`,
          configToken(userState.token),
        );
        const url2 = '/course/last-watched-lesson';
        let response1 = await axiosClient.get(
          `${url2}/${route.params.id}`,
          configToken(userState.token),
        );
        if (response.status === 200) {
          setItemCourse(response.data.payload);
          if (response1.status === 200) {
            const resultSection = response.data.payload.section.find(
              ({lesson}) => {
                return lesson.find(
                  ({id}) => id === response1.data.payload.lessonId,
                );
              },
            );
            const result = resultSection.lesson.find(
              ({id}) => id === response1.data.payload.lessonId,
            );
            setItemLesson({
              ...result,
              videoUrl: response1.data.payload.videoUrl,
              currentTime: response1.data.payload.currentTime,
            });
          }
        }
      } catch ({response}) {
        console.log(response);
      }
    };
    fetchCourseDetailWithLesson();
  }, [route, userState]);

  const dismiss = () => {
    navigation.goBack();
  };

  const onCompleteVideo = async () => {
    const url = '/lesson/update-status';
    try {
      let response = await axiosClient.post(
        url,
        {lessonId: itemLesson.id},
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

import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  Share,
  Platform,
  Alert,
} from 'react-native';
import {Text} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../providers/theme-propvider';
import {LessonContext} from '../../../providers/lesson-provider';
import {AuthenticationContext} from '../../../providers/authentication-provider';
import axiosClient from '../../../api/axiosClient';
import {Styles, BoxModel, Typography, Size} from '../../../globals/styles';
import configToken from '../../../api/config-token';
import {LanguageContext} from '../../../providers/language-provider';
import {CategoryContext} from '../../../providers/category-provider';
import RNFetchBlob from 'rn-fetch-blob';
import {useAsyncStorage} from '@react-native-community/async-storage';

const MoreView = () => {
  const {theme2} = useContext(ThemeContext);
  const {itemCourse, itemLesson, listDownload, setListDownload} = useContext(
    LessonContext,
  );
  const {userState} = useContext(AuthenticationContext);
  const {language} = useContext(LanguageContext);
  const {listCourseLike, setListCourseLike} = useContext(CategoryContext);
  const [isLike, setLike] = useState(false);
  const [progressDownload, setProgressDownload] = useState(-1);
  const {setItem} = useAsyncStorage('@listDownload');

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
        title: language === 'eng' ? 'Share' : 'Chia sẻ',
        message:
          language === 'eng'
            ? 'This course is heplful'
            : 'Khóa học này rất hữu ích',
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
        setListCourseLike(...listCourseLike, itemCourse.id);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storeListDownload = async (value) => {
    try {
      const jsonValue = JSON.stringify({listDownload: value});
      console.log(jsonValue);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const checkDownload = (lessonId) => {
    const fResult = listDownload.find((item) => item.id === lessonId);
    if (!fResult) {
      return false;
    }
    return true;
  };
  const onPressDownload = () => {
    if (itemLesson.videoUrl.includes('https://youtube.com/embed')) {
      Alert.alert('Notification', 'Sorry, cannot download video from youtube');
      return;
    }
    if (checkDownload(itemLesson.id) === true) {
      Alert.alert('Notification', 'This video is downloaded');
      return;
    }
    const dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mime: 'video/mp4',
        description: 'File downloaded by download manager.',
        path: dirs.DownloadDir + `/${itemLesson.id}.mp4`,
      },
      fileCache: true,
    })
      .fetch('GET', itemLesson.videoUrl)
      .uploadProgress((written, total) => {
        console.log('uploaded', written / total);
        const progress = written / total;
        setProgressDownload(Math.floor(progress * 100));
      })
      // listen to download progress event
      .progress((received, total) => {
        console.log('progress', received / total);
        const progress = received / total;
        setProgressDownload(Math.floor(progress * 100));
      })
      .then((res) => {
        // the path of downloaded file
        res.path();
        const lessonDownload = {
          id: itemLesson.id,
          uri:
            Platform.OS === 'android'
              ? 'file://' + res.path()
              : '' + res.path(),
        };
        setListDownload([...listDownload, lessonDownload]);
        storeListDownload([...listDownload, lessonDownload]);
        console.log(res.path());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderRow = (
    title,
    iconName,
    onPress,
    likeStatus = false,
    progress = null,
  ) => {
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
              {title}{' '}
              {progress !== null && progress < 100 ? progress + '%' : ''}{' '}
              {progress !== null && progress >= 100 ? 'Done' : ''}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <ScrollView style={{backgroundColor: theme2.themeColor}}>
      {renderRow(
        `${language === 'eng' ? 'Download course' : 'Tải về'}`,
        'file-download',
        onPressDownload,
        progressDownload,
      )}
      {renderRow(
        `${language === 'eng' ? 'About this course' : 'Thông tin khóa học'}`,
        'info-outline',
      )}
      {renderRow(
        `${language === 'eng' ? 'Share this course' : 'Chia sẻ khóa học'}`,
        'share',
        onPressShareCourse,
      )}
      {renderRow(
        isLike
          ? `${
              language === 'eng'
                ? 'Remove course From favorites'
                : 'Xóa khỏi danh sách yêu thích'
            }`
          : `${
              language === 'eng'
                ? 'Add course to favorites'
                : 'Thêm vào danh sách yêu thích'
            }`,
        'star-border',
        onPressLike,
        isLike,
      )}
    </ScrollView>
  );
};
export default MoreView;

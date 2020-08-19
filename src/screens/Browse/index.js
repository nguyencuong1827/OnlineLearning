/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Alert, View} from 'react-native';
import Banner from '../../components/Banner';
import {ScaleSize, Distance, Typography, Colors} from '../../globals/styles';
import {ThemeContext} from '../../providers/theme-propvider';
import ListCategory from '../../components/ListCategory';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {ListCoursesHorizontal} from '../../components/ListCourses';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
import {ListAuthorsHorizontal} from '../../components/ListAuthors';
import {NewRelease, RecommendCourse} from '../../globals/constants/screen-name';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
};

const Browse = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const [favorite, setFavorite] = useState([]);
  const {userState} = useContext(AuthenticationContext);

  const [listInstructor, setListInstructor] = useState([]);
  const getInstructor = async () => {
    try {
      const response = await axiosClient.get('/instructor');
      // const response = await listInstructorAPI();]
      if (response.status === 200) {
        setListInstructor(response.data.payload);
      }
    } catch ({response}) {
      console.log(response);
    }
  };
  const getFavoriteCourse = async () => {
    const url = '/user/get-favorite-courses';
    try {
      let response = await axiosClient.get(url, configToken(userState.token));
      if (response.status === 200) {
        setFavorite(response.data.payload);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const showListCourse = (screenName) => {
    navigation.navigate(screenName, {id: screenName});
  };

  useEffect(() => {
    getFavoriteCourse();
    getInstructor();
  }, [userState]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner
          buttonStyle={{button: styles.newAndRecommendButton}}
          title1Style={{title1: styles.newAndRecommendTitle}}
          title2Style={{title2: styles.newAndRecommendTitle}}
          title1="NEW"
          title2="RELEASES"
          source={
            'https://image.freepik.com/free-photo/colorful-hot-air-balloon-flying-sky-sunset-travel-air-transportation-concept-balloon-carnival-thailand_1484-949.jpg'
          }
          onPress={() => showListCourse(NewRelease)}
        />
        <Banner
          buttonStyle={{button: styles.newAndRecommendButton}}
          title1Style={{title1: styles.newAndRecommendTitle}}
          title2Style={{title2: styles.newAndRecommendTitle}}
          title1="RECOMMEND"
          title2="FOR YOU"
          source={
            'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130238819/original/d4096d4950eba421600f21c6c753c19375222eb6/draw-you-a-landscape-image-with-ms-paint.png'
          }
          onPress={() => showListCourse(RecommendCourse)}
        />
        <ListCategory navigation={navigation} />
        <ListCoursesHorizontal
          data={favorite}
          navigation={navigation}
          title="Your favorite courses"
          turnOffSeeAll={true}
        />
        <ListAuthorsHorizontal
          data={listInstructor.slice(0, 7)}
          title="Top instroductors"
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Browse;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newAndRecommendButton: {
    marginHorizontal: Distance.spacing_12,
    marginTop: Distance.spacing_10,
    height: ScaleSize.scaleSizeHeight(65),
  },
  newAndRecommendTitle: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.white,
  },
  topicImgButton: {
    height: ScaleSize.scaleSizeHeight(65),
    margin: Distance.spacing_5,
  },
  title1: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.white,
  },
  title2: {
    fontSize: Typography.fontSize14,
    color: Colors.white,
  },
  groupImgButton: {
    margin: Distance.spacing_5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect, useContext, useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ListCoursesHorizontal} from '../../components/ListCourses';
import {BookmarksHorizontal} from '../../components/ListBookmarks';
import {EmptyChannel} from '../../components/ListChannels';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {
  DistanceScale,
  Typography,
  Colors,
  ScaleSize,
} from '../../globals/styles';
import {
  ProfileScreen,
  SettingScreen,
} from '../../globals/constants/screen-name';
import {ThemeContext} from '../../providers/theme-propvider';
import {courses} from '../../globals/fake-data';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
import {AuthenticationContext} from '../../providers/authentication-provider';
import p from 'pretty-format';

const WelcomeImage = () => (
  <ImageBackground
    style={styles.image}
    source={require('../../../assets/images/welcome.jpg')}>
    <Text style={styles.text}>Welcome to DoubleSeven</Text>
  </ImageBackground>
);

const headerLeft = (navigation, theme) => (
  <TouchableOpacity
    style={styles.buttonHeader}
    onPress={() => navigation.navigate(SettingScreen)}>
    <IconAnt
      name="setting"
      size={ScaleSize.scaleSizeWidth(22)}
      color={theme.colorMainText}
    />
  </TouchableOpacity>
);

const headerRight = (navigation, theme) => (
  <TouchableOpacity
    style={styles.buttonHeader}
    onPress={() => navigation.navigate(ProfileScreen)}>
    <IconEvil
      name="user"
      size={ScaleSize.scaleSizeWidth(32)}
      color={theme.colorMainText}
    />
  </TouchableOpacity>
);

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
};

const Home = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  const {userState} = useContext(AuthenticationContext);
  setStyleWithTheme(theme);

  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);
  const [state3, setState3] = useState([]);
  const [state4, setState4] = useState([]);
  const [listInstructor, setLIstInstructor] = useState([]);
  const body = {
    limit: 7,
    offset: 0,
  };
  const fetchDataState1 = async () => {
    const url = '/course/top-new';
    try {
      let response = await axiosClient.post(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        setState1(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };

  const fetchDataState2 = async () => {
    const url = '/course/top-sell';
    try {
      let response = await axiosClient.post(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        setState2(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };
  const fetchDataState3 = async () => {
    const url = '/course/top-rate';
    try {
      let response = await axiosClient.post(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        setState3(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };
  const fetchDataState4 = async () => {
    try {
      const url = '/user/recommend-course';
      const limit = 6;
      const offset = 0;

      let response = await axiosClient.get(
        `${url}/${userState.userInfo.id}/${limit}/${offset}`,
      );

      if (response.isSuccess) {
        setState4(response.data.payload);
      }
    } catch (response) {
      console.log(p(response));
    }
  };
  useEffect(() => {
    fetchDataState1();
    fetchDataState2();
    fetchDataState3();
    fetchDataState4();
  }, [userState, setState1, setState2, setState3, setState4]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => headerRight(navigation, theme),
      headerLeft: () => headerLeft(navigation, theme),
    });
  }, [navigation, theme]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <WelcomeImage />
        <ListCoursesHorizontal
          data={state1}
          title="New releases"
          navigation={navigation}
        />
        <ListCoursesHorizontal
          data={state2}
          title="Best seller"
          navigation={navigation}
        />
        <ListCoursesHorizontal
          data={state3}
          title="Top rating"
          navigation={navigation}
        />
        <ListCoursesHorizontal
          data={state4}
          title="Recommend for you"
          navigation={navigation}
        />
        <BookmarksHorizontal navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white95,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: ScaleSize.scaleSizeHeight(80),
  },
  text: {
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
    color: Colors.white,
    textAlign: 'center',
  },
  buttonHeader: {
    marginHorizontal: DistanceScale.spacing_12,
  },
});

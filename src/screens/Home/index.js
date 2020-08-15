import React, {useLayoutEffect, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ListCoursesHorizontal} from '../../components/ListCourses';
import {
  EmptyBookmark,
  BookmarksHorizontal,
} from '../../components/ListBookmarks';
import {EmptyPath} from '../../components/ListPaths';
import {EmptyChannel} from '../../components/ListChannels';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  DistanceScale,
  Typography,
  Colors,
  ScaleSize,
} from '../../globals/styles';
import {ProfileScreen} from '../../globals/constants/screen-name';
import {ThemeContext} from '../../providers/theme-propvider';
import {courses} from '../../globals/fake-data';
import localStorage from '../../helpers/local-storage';
import { userInfoKey } from '../../globals/constants/key-storage';

const WelcomeImage = () => (
  <ImageBackground
    style={styles.image}
    source={require('../../../assets/images/welcome.jpg')}>
    <Text style={styles.text}>Welcome to DoubleSeven</Text>
  </ImageBackground>
);

const headerRight = (navigation, theme) => (
  <TouchableOpacity
    style={styles.buttonHeader}
    onPress={() => navigation.navigate(ProfileScreen)}>
    <Icon
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
  setStyleWithTheme(theme);

  useLayoutEffect(() => {
    console.log(localStorage._getData(userInfoKey));
    navigation.setOptions({
      headerRight: () => headerRight(navigation, theme),
    });
  }, [navigation, theme]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <WelcomeImage />
        <ListCoursesHorizontal
          data={courses}
          title="Software development"
          navigation={navigation}
        />
        <ListCoursesHorizontal title="IT operation" navigation={navigation} />
        <ListCoursesHorizontal
          data={courses}
          title="Data professional"
          navigation={navigation}
        />
        <ListCoursesHorizontal
          data={courses}
          title="Security professional"
          navigation={navigation}
        />
        <BookmarksHorizontal navigation={navigation} />
        <EmptyChannel />
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
    marginHorizontal: DistanceScale.spacing_10,
  },
});

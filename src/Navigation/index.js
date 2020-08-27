/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as ScreenName from '../globals/constants/screen-name';
import AuthorDetail from '../screens/AuthorDetail';
import CourseDetail from '../screens/CourseDetail';
import AppNavigator from './AppNavigator';
import Login from '../screens/Login';
import {ThemeContext} from '../providers/theme-propvider';
import SplashScreen from '../screens/SplashScreen';
import {useAsyncStorage} from '@react-native-community/async-storage';
import LessonCourseNavigatorStack from './AppNavigator/LessonNavigator';
import PlayReview from '../screens/PlayReview';
import SeeFeedBack from '../screens/SeeFeedback';
import {CategoryProvider} from '../providers/category-provider';
import {SearchProvider} from '../providers/search-provider';
import WriteFeedBack from '../screens/WriteFeedBack';
import {LanguageContext} from '../providers/language-provider';

const Stack = createStackNavigator();

const RootScreen = (props) => {
  const {screenOptions} = props;
  const {language} = useContext(LanguageContext);
  return (
    <Stack.Navigator mode="modal" screenOptions={screenOptions}>
      <Stack.Screen
        name={ScreenName.SplashScreen}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.LoginScreen}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.LessonCourseScreenStack}
        component={LessonCourseNavigatorStack}
        options={({route}) => ({
          title: language === 'eng' ? 'Lesson' : 'Bài học',
          animationEnabled: true,
        })}
      />
      <Stack.Screen
        name={ScreenName.AppNavigatorScreen}
        component={AppNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.AuthorDetailScreen}
        component={AuthorDetail}
        options={{title: language === 'eng' ? 'Instructor' : 'Tác giả'}}
      />
      <Stack.Screen
        name={ScreenName.PlayVideoScreen}
        component={PlayReview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.CourseDetailScreen}
        component={CourseDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenName.FeedBackStack}
        component={SeeFeedBack}
        options={{title: language === 'eng' ? 'Feedback' : 'Đánh giá'}}
        initialParams={{
          item: 'item',
          averagePoint: 0,
          contentPoint: 0,
          presentationPoint: 0,
          formalityPoint: 0,
        }}
      />
      <Stack.Screen
        name={ScreenName.WriteFeedBackScreen}
        component={WriteFeedBack}
        options={{
          headerShown: language === 'eng' ? 'Write feedback' : 'Viết đánh giá',
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const {theme, setTheme, setTheme2} = useContext(ThemeContext);
  const {setLanguage} = useContext(LanguageContext);
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.headerFooterBackground,
    },
    headerTintColor: theme.colorMainText,
    headerTitleAlign: 'center',
  };

  const getLanguage = useAsyncStorage('@language');
  const readLanguageFormStorage = async () => {
    try {
      const item = await getLanguage.getItem();
      if (item) {
        const jsonValue = JSON.parse(item);
        setLanguage(jsonValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTheme = useAsyncStorage('@theme');
  const readThemeFormStorage = async () => {
    try {
      const item = await getTheme.getItem();
      if (item) {
        const jsonValue = JSON.parse(item);
        setTheme(jsonValue.theme);
        setTheme2(jsonValue.theme2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readLanguageFormStorage();
    readThemeFormStorage();
  }, []);

  return (
    <CategoryProvider>
      <SearchProvider>
        <NavigationContainer>
          <RootScreen screenOptions={screenOptions} />
        </NavigationContainer>
      </SearchProvider>
    </CategoryProvider>
  );
};

export default RootNavigator;

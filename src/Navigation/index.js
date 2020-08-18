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
import {AuthenticationContext} from '../providers/authentication-provider';
import LessonCourseNavigatorStack from './AppNavigator/CourseDetailNavigator';
import PlayReview from '../screens/PlayReview';
import SeeFeedBack from '../screens/SeeFeedback';
import {CategoryProvider} from '../providers/category-provider';
import {SearchProvider} from '../providers/search-provider';

const Stack = createStackNavigator();

const RootScreen = (props) => {
  const {screenOptions} = props;
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
          title: route.params.title,
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
        options={{title: 'Instructor'}}
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
        options={{title: 'Feedback'}}
        initialParams={{
          item: 'item',
          averagePoint: 0,
          contentPoint: 0,
          presentationPoint: 0,
          formalityPoint: 0,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const {login} = useContext(AuthenticationContext);

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.headerFooterBackground,
    },
    headerTintColor: theme.colorMainText,
    headerTitleAlign: 'center',
  };

  const {getItem} = useAsyncStorage('@userLogin');

  const readItemFromStorage = async () => {
    const item = await getItem();
    const jsonValue = JSON.parse(item);
    if (item !== null) {
      try {
        return await login(jsonValue.email, jsonValue.password);
      } catch ({response}) {
        console.log(response);
      }
    }
  };
  useEffect(() => {
    readItemFromStorage();
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

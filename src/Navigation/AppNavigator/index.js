/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import BrowseStack from './BrowseNavigator';
import Search from '../../screens/Search';
import {ThemeContext} from '../../providers/theme-propvider';
import {Typography} from '../../globals/styles';
import MyCoursesStack from './MyCoursesNavigator';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {LanguageContext} from '../../providers/language-provider';

const configGoogle = {
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId:
    '116025677018-nbtn7gpt2oe8oivild3n3h0f79aqckhc.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
};

const Tab = createBottomTabNavigator();
const AppNavigator = (props) => {
  const {theme} = useContext(ThemeContext);
  const {login, loginWithGoogle} = useContext(AuthenticationContext);
  const {language} = useContext(LanguageContext);
  const {firstLogin} = props.route.params;

  const getCurrentUserInfo = async () => {
    try {
      const response = await GoogleSignin.signInSilently();
      return response;
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log(error);
      } else {
        // some other error
        console.log(error);
      }
    }
  };
  const getUser = useAsyncStorage('@userLogin');
  const readUserFromStorage = async () => {
    const user = await getUser.getItem();
    if (user !== null) {
      const jsonValue = JSON.parse(user);
      try {
        if (jsonValue.password === undefined) {
          const response = await getCurrentUserInfo();
          return await loginWithGoogle(response.user.email, response.user.id);
        } else {
          return await login(jsonValue.email, jsonValue.password);
        }
      } catch ({response}) {
        console.log(response);
      }
    }
  };
  useEffect(() => {
    if (firstLogin === false) {
      readUserFromStorage();
    }

    GoogleSignin.configure(configGoogle);
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'MyCourses') {
            iconName = 'profile';
          } else if (route.name === 'Browse') {
            iconName = 'creditcard';
          } else {
            iconName = 'search1';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colorIconActiveTab,
        inactiveTintColor: theme.colorIconTab,
        style: {
          backgroundColor: theme.headerFooterBackground,
        },
        labelStyle: {
          fontSize: Typography.fontSize14,
        },
      }}
      navigationOptions={{
        header: {
          visible: true,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{title: language === 'eng' ? 'Home' : 'Trang chủ'}}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseStack}
        options={{title: language === 'eng' ? 'Browse' : 'Duyệt'}}
      />
      <Tab.Screen
        name="MyCourses"
        component={MyCoursesStack}
        options={{title: language === 'eng' ? 'My Courses' : 'Khóa học'}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{title: language === 'eng' ? 'Search' : 'Tìm kiếm'}}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

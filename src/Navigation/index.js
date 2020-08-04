import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as ScreenName from '../globals/constants/screen-name';
import AuthorDetail from '../screens/AuthorDetail';
import CourseDetail from '../screens/CourseDetail';
import {AuthenticationContext} from '../providers/authentication-provider';
import AppNavigator from './AppNavigator';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import {ThemeContext} from '../providers/theme-propvider';
const Stack = createStackNavigator();
const RootNavigator = () => {
  const {state} = useContext(AuthenticationContext);
  const {theme} = useContext(ThemeContext);

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.headerFooterBackground,
    },
    headerTintColor: theme.colorMainText,
    headerTitleAlign: 'center',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" screenOptions={screenOptions}>
        {/* {!state.isLoggedIn ? (
          <Stack.Screen
            name={ScreenName.LoginScreen}
            component={Login}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name={ScreenName.AppNavigatorScreen}
              component={AppNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={ScreenName.CourseDetailScreen}
              component={CourseDetail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={ScreenName.AuthorDetailScreen}
              component={AuthorDetail}
              options={{title: ''}}
            />
          </>
        )} */}
        <Stack.Screen
          name={ScreenName.AppNavigatorScreen}
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.CourseDetailScreen}
          component={CourseDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.AuthorDetailScreen}
          component={AuthorDetail}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

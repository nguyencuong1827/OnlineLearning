import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootTab from './AppNavigator';
import PathDetail from '../components/Paths/PathDetail/path-detail';
import AuthNavigator from './AuthNavigator';
import * as ScreenName from '../globals/constants/screen-name';
import AuthorDetail from '../screens/AuthorDetail';
import CourseDetail from '../screens/CourseDetail';
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        initialRouteName={ScreenName.AuthNavigatorScreen}>
        <Stack.Screen
          name={ScreenName.AuthNavigatorScreen}
          component={AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.RooTabScreen}
          component={RootTab}
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
        <Stack.Screen
          name="PathDetailScreen"
          component={PathDetail}
          options={{title: 'Path Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

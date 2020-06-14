import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Authentication/Login/login';
import RootTab from './root-tab';
import CourseDetail from '../CourseDetail/course-detail';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName="RootTab">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RootTab"
          component={RootTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CourseDetail"
          component={CourseDetail}
          options={{title: 'Course Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

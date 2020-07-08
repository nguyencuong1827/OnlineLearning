import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootTab from './AppNavigator';
import CourseDetail from '../components/Courses/CourseDetail/course-detail';
import PathDetail from '../components/Paths/PathDetail/path-detail';
import AuthNavigator from './AuthNavigator';
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName="RootTab">
        <Stack.Screen
          name="AuthNavigator"
          component={AuthNavigator}
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
        <Stack.Screen
          name="PathDetail"
          component={PathDetail}
          options={{title: 'Path Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

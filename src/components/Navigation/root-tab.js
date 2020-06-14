import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Authentication/Login/login';
import HomeStack from './home-stack';
import ListCoursesStack from './list-courses-stack';

const Tab = createBottomTabNavigator();
const RootTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen name="ListCourses" component={ListCoursesStack} />
    </Tab.Navigator>
  );
};

export default RootTab;

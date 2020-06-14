import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../Authentication/Login/login';
import HomeStack from './home-stack';
import ListCoursesStack from './list-courses-stack';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1565c0',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen name="ListCourses" component={ListCoursesStack} />
    </Tab.Navigator>
  );
};

export default RootTab;

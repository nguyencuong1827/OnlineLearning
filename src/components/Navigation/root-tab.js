import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home-stack';
import DownloadStack from './download-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import BrowseStack from './browse-stack';
import Search from '../Main/Search/search';
const Tab = createBottomTabNavigator();
const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Downloads') {
            iconName = 'clouddownloado';
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
        activeTintColor: '#1565c0',
        inactiveTintColor: 'gray',
      }}
      navigationOptions={{
        header: {
          visible: true,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Downloads" component={DownloadStack} />
      <Tab.Screen name="Browse" component={BrowseStack} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default RootTab;

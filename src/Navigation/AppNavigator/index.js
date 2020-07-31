import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeNavigator';
import DownloadStack from './DownloadNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import BrowseStack from './BrowseNavigator';
import Search from '../../components/Search';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
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
        style: {
          backgroundColor: '#fff',
        },
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

export default AppNavigator;

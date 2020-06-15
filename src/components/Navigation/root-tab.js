import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './home-stack';
import DownloadStack from './download-stack';
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
          if (route.name === 'Downloads') {
            iconName = 'clouddownloado';
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
      <Tab.Screen name="Downloads" component={DownloadStack} />
    </Tab.Navigator>
  );
};

export default RootTab;

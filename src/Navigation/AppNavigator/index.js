import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeNavigator';
import DownloadStack from './DownloadNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import BrowseStack from './BrowseNavigator';
import Search from '../../screens/Search';
import {ThemeContext} from '../../providers/theme-propvider';
import {Typography} from '../../globals/styles';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const {theme} = useContext(ThemeContext);
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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Browse" component={BrowseStack} />
      <Tab.Screen
        name="MyCourses"
        component={DownloadStack}
        options={{title: 'My Courses'}}
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

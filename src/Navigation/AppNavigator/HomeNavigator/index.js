import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home';
import {
  HomeScreen,
  ProfileScreen,
  ThemeScreen,
  BookmarkScreen,
  SettingScreen,
} from '../../../globals/constants/screen-name';
import Profile from '../../../screens/Profile';
import Theme from '../../../screens/Theme';
import {ThemeContext} from '../../../providers/theme-propvider';
import {BookmarksVertical} from '../../../components/ListBookmarks';
import Setting from '../../../screens/Setting';

const Stack = createStackNavigator();

const HomeStack = () => {
  const {theme} = useContext(ThemeContext);
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.headerFooterBackground,
    },
    headerTintColor: theme.colorMainText,
    headerTitleAlign: 'center',
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={HomeScreen}
        component={Home}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name={ProfileScreen}
        component={Profile}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name={SettingScreen}
        component={Setting}
        options={{title: 'Setting'}}
      />
      <Stack.Screen
        name={ThemeScreen}
        component={Theme}
        options={{title: 'Theme'}}
      />
      <Stack.Screen
        name={BookmarkScreen}
        component={BookmarksVertical}
        options={{title: 'Bookmarks'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home';
import {
  HomeScreen,
  ProfileScreen,
  ThemeScreen,
  BookmarkScreen,
  SettingScreen,
  NewRelease,
  TopRating,
  RecommendCourse,
  BestSeller,
  LanguageScreen,
} from '../../../globals/constants/screen-name';
import Profile from '../../../screens/Profile';
import Theme from '../../../screens/Theme';
import {ThemeContext} from '../../../providers/theme-propvider';
import {BookmarksVertical} from '../../../components/ListBookmarks';
import Setting from '../../../screens/Setting';
import ListOfCourse from '../../../screens/ListOfCourse';
import Language from '../../../screens/Language';
import {LanguageContext} from '../../../providers/language-provider';

const Stack = createStackNavigator();

const HomeStack = () => {
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
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
        options={{title: language === 'eng' ? 'Home' : 'Trang chủ'}}
      />
      <Stack.Screen
        name={ProfileScreen}
        component={Profile}
        options={{title: language === 'eng' ? 'Profile' : 'Cá nhân'}}
      />
      <Stack.Screen
        name={SettingScreen}
        component={Setting}
        options={{title: language === 'eng' ? 'Setting' : 'Cài đặt'}}
      />
      <Stack.Screen
        name={ThemeScreen}
        component={Theme}
        options={{title: language === 'eng' ? 'Theme' : 'Chủ đề'}}
      />
      <Stack.Screen
        name={NewRelease}
        component={ListOfCourse}
        options={{title: language === 'eng' ? 'New release' : 'Mới thực hiện'}}
      />
      <Stack.Screen
        name={RecommendCourse}
        component={ListOfCourse}
        options={{
          title: language === 'eng' ? 'Recommend for you' : 'Gợi ý cho bạn',
        }}
      />
      <Stack.Screen
        name={TopRating}
        component={ListOfCourse}
        options={{title: language === 'eng' ? 'Top rating' : 'Xếp hạng cao'}}
      />
      <Stack.Screen
        name={BestSeller}
        component={ListOfCourse}
        options={{
          title: language === 'eng' ? 'Best seller' : 'Nhiều học viên nhất',
        }}
      />
      <Stack.Screen
        name={LanguageScreen}
        component={Language}
        options={{title: language === 'eng' ? 'Language' : 'Ngôn ngữ'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyCoursesScreen} from '../../../globals/constants/screen-name';
import {ThemeContext} from '../../../providers/theme-propvider';
import MyCourses from '../../../screens/MyCourses';
import {LanguageContext} from '../../../providers/language-provider';

const Stack = createStackNavigator();

const MyCoursesStack = () => {
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
        name={MyCoursesScreen}
        component={MyCourses}
        options={{
          title: language === 'eng' ? 'My Courses' : 'Khóa học đăng ký',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyCoursesStack;

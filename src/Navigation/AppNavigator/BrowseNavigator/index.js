import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Browse from '../../../screens/Browse';
import {
  BrowseScreen,
  NewRelease,
  RecommendCourse,
  CategoryScreen,
} from '../../../globals/constants/screen-name';
import {ThemeContext} from '../../../providers/theme-propvider';
import ListOfCourse from '../../../screens/ListOfCourse';
import {LanguageContext} from '../../../providers/language-provider';

const Stack = createStackNavigator();

const BrowseStack = () => {
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
        name={BrowseScreen}
        component={Browse}
        options={{title: language === 'eng' ? 'Browse' : 'Duyệt'}}
      />
      <Stack.Screen
        name={NewRelease}
        component={ListOfCourse}
        options={{title: language === 'eng' ? 'New releases' : 'Mới thực hiện'}}
      />
      <Stack.Screen
        name={RecommendCourse}
        component={ListOfCourse}
        options={{
          title: language === 'eng' ? 'Recommend for you' : 'Gợi ý cho bạn',
        }}
      />
      <Stack.Screen
        name={CategoryScreen}
        component={ListOfCourse}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
};

export default BrowseStack;

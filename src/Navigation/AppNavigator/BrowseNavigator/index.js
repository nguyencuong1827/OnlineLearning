import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Browse from '../../../components/Browse/browse';
import Browse from '../../../screens/Browse';
import {
  BrowseScreen,
  NewRelease,
  RecommendCourse,
  CategoryScreen,
} from '../../../globals/constants/screen-name';
import {ThemeContext} from '../../../providers/theme-propvider';
import ListOfCourse from '../../../screens/ListOfCourse';
import HomeStack from '../HomeNavigator';

const Stack = createStackNavigator();

const BrowseStack = () => {
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
        name={BrowseScreen}
        component={Browse}
        options={{title: 'Browse'}}
      />
      <Stack.Screen
        name={NewRelease}
        component={ListOfCourse}
        options={{title: 'New releases'}}
      />
      <Stack.Screen
        name={RecommendCourse}
        component={ListOfCourse}
        options={{title: 'Recommend for you '}}
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

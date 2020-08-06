import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Browse from '../../../components/Browse/browse';
import Browse from '../../../screens/Browse';
import {BrowseScreen} from '../../../globals/constants/screen-name';
import {ThemeContext} from '../../../providers/theme-propvider';

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
    </Stack.Navigator>
  );
};

export default BrowseStack;

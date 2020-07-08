import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Browse from '../../../components/Browse/browse';
import {BrowseScreen} from '../../../globals/constants/screen-name';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};
const BrowseStack = () => {
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

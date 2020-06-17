import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Browse from '../Main/Browse/browse';
import PathDetail from '../Paths/PathDetail/path-detail';

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
        name="Browse"
        component={Browse}
        options={{title: 'Browse'}}
      />
    </Stack.Navigator>
  );
};

export default BrowseStack;

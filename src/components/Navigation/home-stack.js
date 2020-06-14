import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Main/Home/home';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

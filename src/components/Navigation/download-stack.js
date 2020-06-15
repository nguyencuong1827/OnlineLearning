import React from 'react';
import {Button, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Downloads from '../Main/Downloads/downloads';

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
const DownloadStack = () => {
  return (
    <Stack.Navigator initialRouteName="Downloads" screenOptions={screenOptions}>
      <Stack.Screen
        name="Downloads"
        component={Downloads}
        options={{
          title: 'Downloads',
        }}
      />
    </Stack.Navigator>
  );
};

export default DownloadStack;

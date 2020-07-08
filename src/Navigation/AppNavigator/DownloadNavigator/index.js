import React from 'react';
import {Button, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Downloads from '../../../components/Downloads/downloads';
import {DownloadScreen} from '../../../globals/constants/screen-name';

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
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={DownloadScreen}
        component={Downloads}
        options={{
          title: 'Downloads',
        }}
      />
    </Stack.Navigator>
  );
};

export default DownloadStack;

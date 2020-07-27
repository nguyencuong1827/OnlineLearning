import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../../globals/constants/screen-name';
import Login from '../../screens/Login';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={LoginScreen} component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

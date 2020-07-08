import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../components/Authentication/Login/login';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack>
      <AuthStack.Screen name="LoginScreen" component={Login} />
    </AuthStack>
  );
};

export default AuthNavigator;

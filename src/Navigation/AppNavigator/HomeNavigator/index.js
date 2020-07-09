import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Home from '../../../components/Home/home';
import Home from '../../../screens/Home';
import {HomeScreen} from '../../../globals/constants/screen-name';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={HomeScreen}
        component={Home}
        options={{title: 'Home'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

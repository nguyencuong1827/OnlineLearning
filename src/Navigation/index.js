import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootTab from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import * as ScreenName from '../globals/constants/screen-name';
import AuthorDetail from '../screens/AuthorDetail';
import CourseDetail from '../screens/CourseDetail';
import {AuthenticationContext} from '../providers/authentication-provider';
const Stack = createStackNavigator();
const RootStack = () => {
  const {state} = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        {!state.isLoggedIn ? (
          <Stack.Screen
            name={ScreenName.AuthNavigatorScreen}
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name={ScreenName.RooTabScreen}
              component={RootTab}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={ScreenName.CourseDetailScreen}
              component={CourseDetail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={ScreenName.AuthorDetailScreen}
              component={AuthorDetail}
              options={{title: ''}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

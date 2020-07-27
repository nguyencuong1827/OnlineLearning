import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import RecentSearches from '../../../components/Search/RecentSearches/recent-searches';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};
const SearchStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="RecentSearches">
      <Stack.Screen
        name="RecentSearches"
        component={RecentSearches}
        initialParams={{recentSearches: props.recentSearches}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecentSearches from './RecentSearches';
import SearchResults from './SearchResults';

const Stack = createStackNavigator();

const SearchPage = (props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'RecentSearchScreen'} component={RecentSearches} />
      <Stack.Screen name={'ResultSearchScreen'} component={SearchResults} />
    </Stack.Navigator>
  );
};

export default SearchPage;

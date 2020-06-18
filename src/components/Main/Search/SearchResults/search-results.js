import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CourseResults from './CourseResults/course-results';
import AllResults from './AllResults/all-results';
import PathResults from './PathResults/path-results';
import AuthorResults from './AuthorResults/author-results';

const Tab = createMaterialTopTabNavigator();

const SearchResults = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 16, fontWeight: 'bold', textTransform: 'none'},
      }}>
      <Tab.Screen name="All" component={AllResults} />
      <Tab.Screen name="Courses" component={CourseResults} />
      <Tab.Screen name="Paths" component={PathResults} />
      <Tab.Screen name="Author" component={AuthorResults} />
    </Tab.Navigator>
  );
};

export default SearchResults;

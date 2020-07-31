import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CourseResults from './CourseResults';
import AllResults from './AllResults';
import PathResults from './PathResults';
import AuthorResults from './AuthorResults';
import NoResults from './NoResults';

const Tab = createMaterialTopTabNavigator();

const SearchResults = (props) => {
  const {searchContent, courseResults, authorResults, pathResults} = props;
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 16, fontWeight: 'bold', textTransform: 'none'},
      }}
      initialRouteName="All">
      <Tab.Screen
        name="All"
        component={
          courseResults.length === 0 &&
          authorResults.length === 0 &&
          pathResults.length === 0
            ? NoResults
            : AllResults
        }
        initialParams={{
          searchContent,
          courseResults,
          authorResults,
        }}
      />
      <Tab.Screen
        name="Courses"
        component={courseResults.length === 0 ? NoResults : CourseResults}
        initialParams={{
          searchContent,
          courseResults,
        }}
      />
      <Tab.Screen
        name="Paths"
        component={pathResults.length === 0 ? NoResults : PathResults}
        initialParams={{
          searchContent,
          pathResults,
        }}
      />
      <Tab.Screen
        name="Authors"
        component={!authorResults ? NoResults : AuthorResults}
        initialParams={{
          searchContent,
          authorResults,
        }}
      />
    </Tab.Navigator>
  );
};

export default SearchResults;

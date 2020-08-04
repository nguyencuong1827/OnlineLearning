import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CourseResults from './CourseResults';
import AllResults from './AllResults';
import PathResults from './PathResults';
import AuthorResults from './AuthorResults';
import NoResults from './NoResults';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography} from '../../../globals/styles';

const Tab = createMaterialTopTabNavigator();

const SearchResults = (props) => {
  const {searchContent, courseResults, authorResults, pathResults} = props;
  const {theme} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colorIconActiveTab,
        inactiveTintColor: theme.colorIconTab,
        style: {
          backgroundColor: theme.headerFooterBackground,
        },
        labelStyle: {
          fontSize: Typography.fontSize16,
          textTransform: 'none',
        },
      }}
      sceneContainerStyle={{backgroundColor: theme.backgroundColor}}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

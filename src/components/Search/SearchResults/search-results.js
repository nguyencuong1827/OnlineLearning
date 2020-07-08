/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CourseResults from './CourseResults/course-results';
import AllResults from './AllResults/all-results';
import PathResults from './PathResults/path-results';
import AuthorResults from './AuthorResults/author-results';
import NoResults from './NoResults/no-results';
import {courses, authors, paths} from '../../../globals/fake-data';

const Tab = createMaterialTopTabNavigator();

const SearchResults = (props) => {
  const [courseResults, setCourseReults] = useState();
  const [pathResults, setPathReults] = useState();
  const [authorResults, setAuthorReults] = useState();
  const {searchContent} = props.route.params;
  useEffect(() => {
    console.log('search result.js', searchContent);
    if (searchContent !== '') {
      setAuthorReults();
      setCourseReults();
      setPathReults();
      searchFilter(searchContent);
    }
  }, [searchContent]);
  const searchFilter = (searchContent) => {
    const CourseResults = courses.filter((course) => {
      const plusString = `${course.title.toUpperCase()} ${course.author.toUpperCase()}`;
      return plusString.search(searchContent.toUpperCase()) > -1;
    });
    CourseResults.length > 0 ? setCourseReults(CourseResults) : null;

    const AuthorResults = authors.filter((author) => {
      const plusString = `${author.name.toUpperCase()} ${author.skills.toUpperCase()}`;
      return plusString.search(searchContent.toUpperCase()) > -1;
    });
    AuthorResults.length > 0 ? setAuthorReults(AuthorResults) : null;

    let PathResults = paths.filter((path) => {
      const pathTitleUpperCase = path.title.toUpperCase();
      return pathTitleUpperCase.search(searchContent.toUpperCase()) > -1;
    });
    if (AuthorResults.length > 0 && PathResults.length === 0) {
      for (const author of AuthorResults) {
        let newPathResults = paths.filter((path) => {
          const pathTitleUpperCase = path.title.toUpperCase();
          return pathTitleUpperCase.search(author.paths.toUpperCase()) > -1;
        });
        PathResults = [...newPathResults];
      }
    }
    PathResults.length > 0 ? setPathReults(PathResults) : null;
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 16, fontWeight: 'bold', textTransform: 'none'},
      }}
      initialRouteName="All">
      <Tab.Screen
        name="All"
        component={
          !courseResults && !authorResults && !pathResults
            ? NoResults
            : AllResults
        }
        initialParams={{
          searchContent,
        }}
      />
      <Tab.Screen
        name="Courses"
        component={!courseResults ? NoResults : CourseResults}
        initialParams={{
          searchContent,
          courseResults,
        }}
      />
      <Tab.Screen
        name="Paths"
        component={!pathResults ? NoResults : PathResults}
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

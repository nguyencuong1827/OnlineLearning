/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CourseResults from './CourseResults';
import AllResults from './AllResults';
import PathResults from './PathResults';
import AuthorResults from './AuthorResults';
import NoResults from './NoResults';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography} from '../../../globals/styles';
import {SearchContext} from '../../../providers/search-provider';

const Tab = createMaterialTopTabNavigator();

const SearchResults = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  const {searchContent} = useContext(SearchContext);
  useEffect(() => {
    if (searchContent === '') {
      navigation.navigate('RecentSearchScreen');
    }
  }, [searchContent]);
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
      <Tab.Screen name="All" component={AllResults} />
      <Tab.Screen name="Courses" component={CourseResults} />
      <Tab.Screen name="Authors" component={AuthorResults} />
    </Tab.Navigator>
  );
};

export default SearchResults;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

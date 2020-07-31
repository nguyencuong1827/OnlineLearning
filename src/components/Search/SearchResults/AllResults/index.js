import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {ListAuthorsVertical} from '../../../ListAuthors';
import {Typography, DistanceScale} from '../../../../globals/styles';
const AllResult = (props) => {
  const {courseResults, authorResults} = props.route.params;
  const showAll = (screenName) => {
    props.navigation.navigate(screenName);
  };
  const renderHeader = (content, result) => {
    return (
      <TouchableOpacity
        style={styles.containerHeader}
        onPress={() => showAll(content)}>
        <Text style={styles.header}>{content}</Text>
        <Text>
          {result} results {'>'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {courseResults !== [] ? (
        <ListCoursesVertical
          data={courseResults}
          renderHeader={renderHeader('Courses', courseResults.length)}
        />
      ) : null}
      {authorResults.length === 0 ? (
        <ListAuthorsVertical
          data={authorResults}
          renderHeader={renderHeader('Authors', authorResults.length)}
        />
      ) : null}
    </View>
  );
};

export default AllResult;
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: Typography.fontSize16,
    fontWeight: Typography.fontWeightBold,
    marginBottom: DistanceScale.spacing_10,
  },
});

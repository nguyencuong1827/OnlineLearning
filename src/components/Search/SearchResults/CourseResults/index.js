import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {Typography, DistanceScale} from '../../../../globals/styles';
const CourseResults = (props) => {
  const {courseResults} = props.route.params;
  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>{courseResults.length} results</Text>
      </View>
    );
  };
  return (
    <View>
      <ListCoursesVertical data={courseResults} renderHeader={renderHeader} />
    </View>
  );
};

export default CourseResults;
const styles = StyleSheet.create({
  header: {
    fontSize: Typography.fontSize16,
    fontWeight: Typography.fontWeightBold,
    marginBottom: DistanceScale.spacing_10,
  },
});

import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {Typography, Distance} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
};

const CourseResults = (props) => {
  const {courseResults} = props.route.params;
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>{courseResults.length} results</Text>
      </View>
    );
  };

  return (
    <View>
      <ListCoursesVertical
        data={courseResults}
        renderHeader={renderHeader}
        navigation={navigation}
      />
    </View>
  );
};

export default CourseResults;
const styles = StyleSheet.create({
  header: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: Distance.spacing_10,
  },
});

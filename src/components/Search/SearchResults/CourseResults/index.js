import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {Typography, Distance} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';
import {SearchContext} from '../../../../providers/search-provider';
import NoResults from '../NoResults';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
};

const CourseResults = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const {listCourseResult} = useContext(SearchContext);

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>{listCourseResult.length} results</Text>
      </View>
    );
  };

  return (
    <View>
      {listCourseResult.length === 0 ? (
        <NoResults />
      ) : (
        <ListCoursesVertical
          data={listCourseResult}
          renderHeader={renderHeader}
          navigation={navigation}
        />
      )}
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

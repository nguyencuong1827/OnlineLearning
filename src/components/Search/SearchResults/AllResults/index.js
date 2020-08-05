import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {ListAuthorsVertical} from '../../../ListAuthors';
import {Typography, DistanceScale} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';
import Separator from '../../../Separator';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
  styles.result = {
    ...styles.result,
    color: theme.colorMainText,
  };
};

const AllResult = (props) => {
  const {courseResults, authorResults} = props.route.params;
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const showAll = (screenName) => {
    props.navigation.navigate(screenName);
  };

  const renderHeader = (content, result) => {
    return (
      <TouchableOpacity
        style={styles.containerHeader}
        onPress={() => showAll(content)}>
        <Text style={styles.header}>{content}</Text>
        <Text style={styles.result}>
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
          navigation={navigation}
        />
      ) : null}
      {authorResults.length !== [] ? (
        <View>
          <Separator />
          <ListAuthorsVertical
            data={authorResults}
            renderHeader={renderHeader('Authors', authorResults.length)}
            navigation={navigation}
          />
        </View>
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
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: DistanceScale.spacing_10,
  },
  result: {
    fontSize: Typography.fontSize16,
  },
});

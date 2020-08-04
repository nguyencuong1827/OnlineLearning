import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {ThemeContext} from '../../../../providers/theme-propvider';
import {Typography} from '../../../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.result = {
    ...styles.result,
    color: theme.colorMainText,
  };
};

const PathResults = (props) => {
  const {pathResults} = props.route.params;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.result}>{pathResults.length} results</Text>
      </View>
    );
  };
  return (
    <View>
      <ListCoursesVertical data={pathResults} renderHeader={renderHeader} />
    </View>
  );
};

export default PathResults;
const styles = StyleSheet.create({
  result: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
  },
});

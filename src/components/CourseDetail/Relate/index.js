import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, DistanceScale, Typography} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.buttonSeeAllBackground,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
};

const RelateCoursesAndPaths = () => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name="layers"
        size={Typography.fontSize20}
        color={theme.colorMainText}
      />
      <Text style={styles.title}>
        {'  '}Related paths {'&'} courses
      </Text>
    </TouchableOpacity>
  );
};

export default RelateCoursesAndPaths;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.silver,
    padding: DistanceScale.spacing_5,
    marginHorizontal: DistanceScale.spacing_12,
    marginTop: DistanceScale.spacing_12,
    borderRadius: 5,
  },
  title: {
    fontSize: Typography.fontSize16,
  },
});

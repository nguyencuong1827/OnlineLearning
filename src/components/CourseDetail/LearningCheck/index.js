import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {DistanceScale, Typography} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.buttonSeeAllBackground,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
};

const LearningCheck = () => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name="target"
        size={Typography.fontSize20}
        color={theme.colorMainText}
      />
      <Text style={styles.title}>{'  '}Take a learning check</Text>
    </TouchableOpacity>
  );
};

export default LearningCheck;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: DistanceScale.spacing_5,
    marginHorizontal: DistanceScale.spacing_12,
    marginTop: DistanceScale.spacing_8,
    borderRadius: 5,
  },
  title: {
    fontSize: Typography.fontSize16,
  },
});

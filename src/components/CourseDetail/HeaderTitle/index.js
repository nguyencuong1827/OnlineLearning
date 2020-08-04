import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography, DistanceScale} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
};

const HeaderTitle = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.name}</Text>
    </View>
  );
};

export default HeaderTitle;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginVertical: DistanceScale.spacing_12,
    marginHorizontal: DistanceScale.spacing_12,
  },
  header: {
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
  },
});

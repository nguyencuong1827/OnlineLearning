import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../providers/theme-propvider';
import {Typography, Distance, ScaleSize} from '../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.title = {...styles.title, color: theme.colorMainText};
  styles.seeAll = {
    ...styles.seeAll,
    backgroundColor: theme.buttonSeeAllBackground,
    color: theme.colorMainText,
  };
};

const SeeAllButton = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  return (
    <TouchableOpacity style={styles.seeAllButton} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
      {props.turnOffSeeAll ? null : (
        <Text style={styles.seeAll}>See all {'>'}</Text>
      )}
    </TouchableOpacity>
  );
};

export default SeeAllButton;
const styles = StyleSheet.create({
  title: {
    fontWeight: Typography.fontWeightBold,
    fontSize: Typography.fontSize18,
  },
  seeAllButton: {
    flex: 1,
    marginVertical: Distance.spacing_10,
    marginRight: Distance.spacing_10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    textAlign: 'center',
    borderColor: 'gray',
    borderRadius: 10,
    fontSize: Typography.fontSize12,
    height: ScaleSize.scaleSizeHeight(10),
    paddingHorizontal: Distance.spacing_8,
  },
});

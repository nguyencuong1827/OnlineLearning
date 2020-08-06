import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DistanceScale,
  ScaleSize,
  Colors,
  Typography,
} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.title = {...styles.title, color: theme.colorMainText};
  styles.button = {
    ...styles.button,
    backgroundColor: theme.buttonSeeAllBackground,
  };
};

const OptionButtons = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const {addBookmark, indexBookmarked} = props;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button} onPress={addBookmark}>
          <Icon
            name={
              indexBookmarked === -1
                ? 'bookmark-multiple-outline'
                : 'bookmark-multiple'
            }
            size={Typography.fontSize20}
            color={theme.colorMainText}
          />
        </TouchableOpacity>
        <Text style={styles.title}>
          {indexBookmarked === -1 ? 'Bookmark' : 'Bookmarked'}
        </Text>
      </View>

      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="radio-tower"
            size={Typography.fontSize20}
            color={theme.colorMainText}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Add to channel</Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="download-outline"
            size={Typography.fontSize20}
            color={theme.colorMainText}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Download</Text>
      </View>
    </View>
  );
};

export default OptionButtons;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: DistanceScale.spacing_12,
    marginBottom: DistanceScale.spacing_12,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: DistanceScale.spacing_10,
    borderRadius: 12.5,
  },
  title: {
    marginTop: DistanceScale.superSmall,
    fontSize: Typography.fontSize14,
  },
});

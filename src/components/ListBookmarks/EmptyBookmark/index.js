import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography, DistanceScale, ScaleSize} from '../../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.content = {
    ...styles.content,
    backgroundColor: theme.headerFooterBackground,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
  styles.contentText = {...styles.contentText, color: theme.colorSubText};
};
const EmptyBookmark = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmarks</Text>
      <View style={styles.content}>
        <Icon
          name="bookmark-border"
          size={Typography.fontSize40}
          color={theme.colorSubText}
        />
        <Text style={styles.contentText}>
          Use bookmarks to quickly save courses for later.
        </Text>
      </View>
    </View>
  );
};

export default EmptyBookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: DistanceScale.spacing_8,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: ScaleSize.scaleSizeHeight(180),
  },
  contentText: {
    marginTop: DistanceScale.spacing_8,
    fontSize: Typography.fontSize16,
  },
});

import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography, Distance, ScaleSize} from '../../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.content = {
    ...styles.content,
    backgroundColor: theme.headerFooterBackground,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
  styles.contentText = {...styles.contentText, color: theme.colorSubText};
};
const EmptyChannel = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Channels</Text>
      <View style={styles.content}>
        <Icon
          name="bookmark-border"
          size={Typography.fontSize40}
          color={theme.colorSubText}
        />
        <Text style={styles.contentText}>
          Use channels to save, organize, and share content to acconplish your
          learning objectives
        </Text>
      </View>
    </View>
  );
};

export default EmptyChannel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: Distance.spacing_8,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: ScaleSize.scaleSizeHeight(180),
  },
  contentText: {
    textAlign: 'center',
    marginTop: Distance.spacing_8,
    fontSize: Typography.fontSize16,
  },
});

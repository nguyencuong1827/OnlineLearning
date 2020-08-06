import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.title = {...styles.title, color: theme.colorSubText};
  styles.subTitle = {...styles.subTitle, color: theme.colorSubText};
};

const EmptyTranscript = () => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade Subscription</Text>
      <Text style={styles.subTitle}>
        Your current plan doesn't allow access to this feature
      </Text>
    </View>
  );
};

export default EmptyTranscript;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: Typography.fontWeightBold,
    fontSize: Typography.fontSize20,
  },
  subTitle: {
    fontSize: Typography.fontSize16,
  },
});

import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScaleSize, DistanceScale, Typography} from '../../globals/styles';
import Separator from '../../components/Separator';
import {ThemeContext} from '../../providers/theme-propvider';
import themes from '../../globals/styles/themes';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
};
const Theme = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const checkAndSetTheme = (name) => {
    if (name === theme.name) {
      return;
    }
    if (name === 'system') {
      setTheme(themes.system);
      return;
    }
    if (name === 'light') {
      setTheme(themes.light);
      return;
    }
    setTheme(themes.dark);
  };

  setStyleWithTheme(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => checkAndSetTheme('system')}>
        <Text style={styles.title}>System</Text>
        {theme.name === 'system' ? (
          <Icon
            size={ScaleSize.scaleSizeWidth(20)}
            name="check"
            color={theme.colorMainText}
          />
        ) : null}
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.option}
        onPress={() => checkAndSetTheme('light')}>
        <Text style={styles.title}>Light</Text>
        {theme.name === 'light' ? (
          <Icon
            size={ScaleSize.scaleSizeWidth(20)}
            name="check"
            color={theme.colorMainText}
          />
        ) : null}
      </TouchableOpacity>
      <Separator />
      <TouchableOpacity
        style={styles.option}
        onPress={() => checkAndSetTheme('dark')}>
        <Text style={styles.title}>Dark</Text>
        {theme.name === 'dark' ? (
          <Icon
            size={ScaleSize.scaleSizeWidth(20)}
            name="check"
            color={theme.colorMainText}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: DistanceScale.spacing_10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: DistanceScale.spacing_12,
    marginHorizontal: DistanceScale.spacing_10,
  },
  title: {
    fontSize: Typography.fontSize18,
  },
});

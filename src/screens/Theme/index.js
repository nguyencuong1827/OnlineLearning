import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ScaleSize,
  Distance,
  Typography,
  lightTheme,
  darkTheme,
} from '../../globals/styles';
import Separator from '../../components/Separator';
import {ThemeContext} from '../../providers/theme-propvider';
import themes from '../../globals/styles/themes';
import {useAsyncStorage} from '@react-native-community/async-storage';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
};
const Theme = () => {
  const {theme, setTheme, setTheme2} = useContext(ThemeContext);
  const {setItem} = useAsyncStorage('@theme');
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const checkAndSetTheme = (name) => {
    if (name === theme.name) {
      return;
    }
    if (name === 'system') {
      setTheme(themes.system);
      setTheme2(lightTheme);
      storeData({theme: themes.system, theme2: lightTheme});
      return;
    }
    if (name === 'light') {
      setTheme(themes.light);
      setTheme2(lightTheme);
      storeData({theme: themes.light, theme2: lightTheme});
      return;
    }
    setTheme(themes.dark);
    setTheme2(darkTheme);
    storeData({theme: themes.dark, theme2: darkTheme});
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
    padding: Distance.spacing_10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Distance.spacing_12,
    marginHorizontal: Distance.spacing_10,
  },
  title: {
    fontSize: Typography.fontSize18,
  },
});

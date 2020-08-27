import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScaleSize, Distance, Typography} from '../../globals/styles';
import Separator from '../../components/Separator';
import {ThemeContext} from '../../providers/theme-propvider';
import {useAsyncStorage} from '@react-native-community/async-storage';
import {LanguageContext} from '../../providers/language-provider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
};
const Language = () => {
  const {theme} = useContext(ThemeContext);
  const {language, setLanguage} = useContext(LanguageContext);
  const {setItem} = useAsyncStorage('@language');
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const checkAndSetLanguage = (select) => {
    if (select === language) {
      return;
    }
    if (select === 'vn') {
      setLanguage('vn');
      storeData('vn');
      return;
    }
    setLanguage('eng');
    storeData('eng');
  };

  setStyleWithTheme(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => checkAndSetLanguage('vn')}>
        <Text style={styles.title}>
          {language === 'eng' ? 'Vietnamese' : 'Việt Nam'}
        </Text>
        {language === 'vn' ? (
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
        onPress={() => checkAndSetLanguage('eng')}>
        <Text style={styles.title}>
          {language === 'eng' ? 'English' : 'Tiếng Anh'}
        </Text>
        {language === 'eng' ? (
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

export default Language;

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

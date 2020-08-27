import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ThemeContext} from '../../../../providers/theme-propvider';
import {SearchContext} from '../../../../providers/search-provider';
import {HEIGHT} from '../../../../globals/styles/scale-size';
import {Typography, Distance} from '../../../../globals/styles';
import {LanguageContext} from '../../../../providers/language-provider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.title = {
    ...styles.title,
    color: theme.colorSubText,
  };
  styles.noResults = {
    ...styles.noResults,
    color: theme.colorSubText,
  };
};
const NoResults = (props) => {
  const {theme} = useContext(ThemeContext);
  const {searchContent} = useContext(SearchContext);
  const {language} = useContext(LanguageContext);
  setStyleWithTheme(theme);
  return (
    <View style={styles.container}>
      <Icon name="search1" size={80} color="#bdc3c7" />
      <Text style={styles.noResults}>No results</Text>
      <Text style={styles.title}>
        {language === 'eng'
          ? 'We cannot find any math for'
          : 'Chúng tôi không tìm thấy kết quả cho'}{' '}
        {searchContent}
      </Text>
    </View>
  );
};

export default NoResults;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: HEIGHT / 2 - 200,
  },
  noResults: {
    marginTop: Distance.spacing_18,
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
  },
  title: {
    fontSize: Typography.fontSize16,
  },
});

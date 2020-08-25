import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../../providers/theme-propvider';
import {Typography, Distance, ScaleSize} from '../../../../globals/styles';
import {LanguageContext} from '../../../../providers/language-provider';

const setStyleWithTheme = (theme) => {
  styles.content = {
    ...styles.content,
    backgroundColor: theme.headerFooterBackground,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
  styles.contentText = {...styles.contentText, color: theme.colorSubText};
};
const EmptyCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  setStyleWithTheme(theme);
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Icon
          name="golf-course"
          size={Typography.fontSize40}
          color={theme.colorSubText}
        />
        <Text style={styles.contentText}>
          {language === 'eng' ? 'No course found' : 'Không tìm thấy khóa học'}
        </Text>
      </View>
    </View>
  );
};

export default EmptyCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
  },
  contentText: {
    marginTop: Distance.spacing_8,
    fontSize: Typography.fontSize16,
  },
});

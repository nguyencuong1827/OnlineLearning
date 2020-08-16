import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScaleSize, Distance, Typography} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.content = {
    ...styles.content,
    backgroundColor: theme.buttonSeeAllBackground,
  };
  styles.name = {...styles.name, color: theme.colorMainText};
  styles.info = {...styles.info, color: theme.colorSubText};
};

const PathsItem = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.img} source={props.item.urlImg} />
        <View style={styles.content}>
          <Text style={styles.name}>{props.item.name}</Text>
          <Text style={styles.info}>{props.item.numberCourses} hours</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default PathsItem;
const styles = StyleSheet.create({
  container: {
    marginRight: Distance.spacing_5,
    marginLeft: Distance.spacing_5,
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(160),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  img: {
    width: ScaleSize.scaleSizeWidth(210),
    height: ScaleSize.scaleSizeWidth(100),
  },
  content: {
    width: ScaleSize.scaleSizeWidth(210),
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  info: {
    marginBottom: 3,
    fontSize: Typography.fontSize14,
  },
  name: {
    marginBottom: 3,
    fontSize: Typography.fontSize16,
  },
});

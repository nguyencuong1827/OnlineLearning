import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {DistanceScale, Typography, Colors} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.name = {...styles.name, color: theme.colorMainText};
};

const AuthorElement = (props) => {
  const {name, numberCourses, urlAvatar} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={props.showAuthorDetail}>
      <Avatar
        rounded
        size="medium"
        source={urlAvatar}
        containerStyle={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.numnerCourses}>{numberCourses} courses</Text>
      </View>
    </TouchableOpacity>
  );
};
export default AuthorElement;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    margin: DistanceScale.spacing_10,
  },
  name: {
    fontSize: Typography.fontSize14,
  },
  numnerCourses: {
    fontSize: Typography.fontSize12,
    color: Colors.gray,
  },
});

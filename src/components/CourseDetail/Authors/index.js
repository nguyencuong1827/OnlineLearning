import React, {useContext} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Typography, DistanceScale} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.authorContainer = {
    ...styles.authorContainer,
    backgroundColor: theme.buttonSeeAllBackground,
  };
  styles.name = {...styles.name, color: theme.colorMainText};
};

const AuthorOfCourse = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const {authorDetail, showAuthorDetail} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.authorContainer}
        onPress={showAuthorDetail}>
        <Avatar rounded={true} size={25} source={authorDetail.urlAvatar} />
        <Text style={styles.name}>{authorDetail.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthorOfCourse;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: DistanceScale.spacing_10,
  },
  authorContainer: {
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    padding: 3,
  },
  name: {
    marginHorizontal: DistanceScale.spacing_5,
    fontSize: Typography.fontSize14,
  },
});

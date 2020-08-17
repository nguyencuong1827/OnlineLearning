import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {ScaleSize, Distance, Typography} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.name = {...styles.name, color: theme.colorMainText};
};

const sliceString = (string, standardLength) => {
  let subString = string.slice(0, standardLength - 1);
  if (subString.slice(standardLength - 2, standardLength - 1) === ' ') {
    subString = subString.slice(0, standardLength - 2);
  }
  return subString + '...';
};

const AuthorElement = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  const {author} = props;

  const standardLength = 8;
  let subName = author['user.name']
    ? author['user.name']
    : author['user.email'];
  if (subName.length > standardLength) {
    subName = sliceString(subName, standardLength);
  }

  return (
    <TouchableOpacity onPress={props.showAuthorDetail}>
      <View style={styles.author}>
        <Avatar
          rounded
          size="large"
          source={{uri: author['user.avatar']}}
          containerStyle={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{subName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default AuthorElement;
const styles = StyleSheet.create({
  author: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ScaleSize.scaleSizeWidth(68),
  },
  avatar: {
    margin: Distance.spacing_10,
  },
  name: {
    height: ScaleSize.scaleSizeHeight(18),
    textAlign: 'center',
    fontSize: Typography.fontSize16,
  },
});

import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Distance, Typography, Colors} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.name = {...styles.name, color: theme.colorMainText};
};

const AuthorElement = (props) => {
  const {name, point, urlAvatar, showAuthorDetail} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={showAuthorDetail}>
      <Avatar
        rounded
        size="medium"
        source={{uri: urlAvatar}}
        containerStyle={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.point}>{point} point</Text>
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
    margin: Distance.spacing_10,
  },
  name: {
    fontSize: Typography.fontSize16,
  },
  point: {
    marginTop: Distance.superSmall,
    fontSize: Typography.fontSize14,
    color: Colors.gray,
  },
});

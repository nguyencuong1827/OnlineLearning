import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Colors, Typography, DistanceScale} from '../../../../globals/styles';

const AuthorElement = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Avatar rounded={true} size={25} source={props.author.urlAvatar} />
      <Text style={styles.name}>{props.author.name}</Text>
    </TouchableOpacity>
  );
};

export default AuthorElement;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.silver,
    borderRadius: 30,
    marginRight: DistanceScale.spacing_10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  name: {
    marginHorizontal: DistanceScale.spacing_5,
    fontSize: Typography.fontSize14,
    color: Colors.black,
  },
});

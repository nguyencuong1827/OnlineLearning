import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

const sliceString = (string, standardLength) => {
  let subString = string.slice(0, standardLength - 1);
  if (subString.slice(standardLength - 2, standardLength - 1) === ' ') {
    subString = subString.slice(0, standardLength - 2);
  }
  return subString + '...';
};

const AuthorElement = (props) => {
  const standardLength = 8;
  let subName = props.author.name;
  if (subName.length > standardLength) {
    subName = sliceString(subName, standardLength);
  }

  return (
    <TouchableOpacity onPress={props.showAuthorDetail}>
      <View style={styles.author}>
        <Avatar
          rounded
          size="medium"
          source={props.author.urlAvatar}
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
    width: 65,
  },
  avatar: {
    margin: 10,
  },
  name: {
    height: 20,
    textAlign: 'center',
    fontSize: 12,
  },
});

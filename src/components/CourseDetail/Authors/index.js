/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Colors, Typography, DistanceScale} from '../../../globals/styles';

const AuthorOfCourse = (props) => {
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
    backgroundColor: Colors.silver,
    borderRadius: 30,
    alignItems: 'center',
    padding: 3,
  },
  name: {
    marginHorizontal: DistanceScale.spacing_5,
    fontSize: Typography.fontSize14,
    color: Colors.black,
  },
});
